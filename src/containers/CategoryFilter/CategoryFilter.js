import React, { useState } from "react";
import "./CategoryFilter.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMovies,
  selectCategoryFilter,
  setCategoryFilter
} from "../../features/movies/moviesSlice";

const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const selectCategory = useSelector(selectCategoryFilter);

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleChangeCategory = (category) => {
    dispatch(setCategoryFilter(category));
  }

  let listCategory;
  let allCategories = [];
  for (const movie of movies) {
    if (!allCategories.includes(movie.category))
      allCategories.push(movie.category);
  }

  if (isOpen) {
    listCategory = (
      <ul className="CategoryList">
        {allCategories.map((category) => {
          return (
            <li
              key={category}
              onClick={() => handleChangeCategory(category)}
              className="OneCategory"
            >
              {category}
            </li>
          );
        })}
      </ul>
    );
  }

  let label = "choisir categorie film";
  if (selectCategory && allCategories.includes(selectCategory)) {
    label = selectCategory;
  }

  return (
    <div className="CategoryFilter" onClick={handleDropDown}>
      {label}
      <i className="fas fa-chevron-circle-down"></i>
      {listCategory}
    </div>
  );
};

export default CategoryFilter;
