import React, { useState } from "react";
import "./CategoryFilter.css";

const CategoryFilter = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  let listCategory;
  let allCategories = [];

  if (isOpen) {
    listCategory = (
      <ul className="CategoryList">
        {props.moviesList.map((movie, index) => {
          if (!allCategories.includes(movie.category)) {
            allCategories.push(movie.category);
            return (
              <li
                key={movie.title}
                onClick={() => props.onChangeCategory(movie.category)}
              >
                {movie.category}
              </li>
            );
          }
        })}
      </ul>
    );
  }

  let label = "Choisir Category Movie";
  if (props.selectCategory) {
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
