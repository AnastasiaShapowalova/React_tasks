import { useState } from 'react'

const useSetList = () => {
  const [showList, setList] = useState(false)

  const useSet = () => setList(!showList)
  return { useSet, showList }
}

export default useSetList
