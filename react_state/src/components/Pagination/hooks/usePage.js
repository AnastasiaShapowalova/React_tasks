import { useState } from 'react'

const usePage = (arrPage) => {
  const [page, setPage] = useState(arrPage[0])
  return { page, setPage }
}

export default usePage
