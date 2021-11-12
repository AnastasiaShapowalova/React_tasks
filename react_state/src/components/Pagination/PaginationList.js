import React from 'react'

const PaginationList = ({ arrPage, setPage, page }) => {
  return (
    <>
      {arrPage.map((item, i) => (
        <li className="page-item">
          <button
            className={item == page ? 'page-active' : 'page-button'}
            onClick={() => setPage(item)}>
            {i + 1}
          </button>
        </li>
      ))}
    </>
  )
}

export default PaginationList
