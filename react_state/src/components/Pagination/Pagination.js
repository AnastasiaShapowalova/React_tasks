import React from 'react'
import PaginationList from './PaginationList'
import { usePage } from './hooks'

const Pagination = ({ count, limit }) => {
  let countPage = Math.ceil(count / limit)
  let arrPage = Array.from(Array(countPage).keys())
  const { page, setPage } = usePage(arrPage)
  console.log(page)

  return (
    <div className="pagination">
      <li className="page-item">
        <button
          className={arrPage[0] == page ? 'button-disabled' : 'page-button'}>
          Prev
        </button>
      </li>

      <PaginationList setPage={setPage} page={page} arrPage={arrPage} />

      <li className="page-item">
        <button
          className={
            arrPage.length - 1 == page ? 'button-disabled' : 'page-button'
          }>
          Next
        </button>
      </li>
    </div>
  )
}

export default Pagination
