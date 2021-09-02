import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  let listCategory;
  let allCategories = [];
  const { moviesList } = props;
  for (const movie of moviesList) {
    if (!allCategories.includes(movie.category))
      allCategories.push(movie.category);
  }

  if (isOpen) {
    listCategory = (
      <ul className="CategoryList">
        {allCategories.map((category, index) => {
            return (
              <li
                key={category}
                onClick={() => props.onChangeCategory(category)}
              >
                {category}
              </li>
            );
        })}
      </ul>
    );
  }

  let label = "choisir categorie film";
  if (props.selectCategory && allCategories.includes(props.selectCategory)) {
    label = props.selectCategory;
  }

  return (
    <div className="CategoryFilter" onClick={() => handleDropDown()}>
      {label}
      <i class="fas fa-chevron-circle-down"></i>
      {listCategory}
    </div>
  );
};

export default CategoryFilter;
