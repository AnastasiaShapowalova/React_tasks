import { useState } from 'react'

const useSetRate = () => {
  const [rate, setRate] = useState(null)

  return { rate, setRate }
}

export default useSetRate
