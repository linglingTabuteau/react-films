import {useState} from 'react'

function Pagination({items, onPaginationChanged}) {
  const [currentPage, setCurrentPage] = useState(0)
  const [numberOfItemsPerPage, setNumberOfItemsPerPage] = useState(4)

  const numberOfItemsPerPageChoices = [4, 8, 12]

  const gotoNextPage = () => {
    const newCurrentPage = currentPage + 1
    setCurrentPage(newCurrentPage)
    onPaginationChanged({page: newCurrentPage, numberOfItems: numberOfItemsPerPage})
  }

  const gotoPreviousPage = () => {
    const newCurrentPage = currentPage - 1
    setCurrentPage(newCurrentPage)
    onPaginationChanged({page: newCurrentPage, numberOfItems: numberOfItemsPerPage})
  }

  const changeNumberOfItemsPerPage = (event) => {
    const newNumberOfItemsPerPage = parseInt(event.target.value)
    setNumberOfItemsPerPage(newNumberOfItemsPerPage)
    setCurrentPage(0)
    onPaginationChanged({page: 0, numberOfItems: newNumberOfItemsPerPage})
  }

  const isPreviousButtonDisabled = currentPage === 0;
  const isNextButtonDisabled = (currentPage + 1) * numberOfItemsPerPage > items.length

  return (
    <div>
      <button onClick={gotoPreviousPage} disabled={isPreviousButtonDisabled}>
        Precedent
      </button>
      <button onClick={gotoNextPage} disabled={isNextButtonDisabled}>
        Suivant
      </button>
      <select onChange={changeNumberOfItemsPerPage}>
        {numberOfItemsPerPageChoices.map(choice =>
          <option value={choice} key={choice}>{choice}</option>)}
      </select>
    </div>
  )
}

export default Pagination;