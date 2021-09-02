import React from "react"
import { useSelector, useDispatch } from "react-redux";
import {
  selectPagination,
  setCurrentPage,
  setItemsPerPage,
} from "../features/movies/moviesSlice";

function Pagination({moviesList}) {
  const dispatch = useDispatch();
  const pagination = useSelector(selectPagination);

  const numberOfItemsPerPageChoices = [4, 8, 12];

  const gotoNextPage = () => {
    dispatch(setCurrentPage(pagination.currentPage + 1));
  };

  const gotoPreviousPage = () => {
    dispatch(setCurrentPage(pagination.currentPage - 1));
  };

  const changeNumberOfItemsPerPage = (event) => {
    dispatch(setItemsPerPage(parseInt(event.target.value)));
  };

  const isPreviousButtonDisabled = pagination.currentPage === 0;
  const isNextButtonDisabled =
    (pagination.currentPage + 1) * pagination.itemsPerPage > moviesList.length;

  return (
    <div>
      <button onClick={gotoPreviousPage} disabled={isPreviousButtonDisabled}>
        Precedent
      </button>
      <button onClick={gotoNextPage} disabled={isNextButtonDisabled}>
        Suivant
      </button>
      <select onChange={changeNumberOfItemsPerPage}>
        {numberOfItemsPerPageChoices.map((choice) => (
          <option value={choice} key={choice}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
