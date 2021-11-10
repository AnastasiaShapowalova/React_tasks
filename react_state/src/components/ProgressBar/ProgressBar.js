import React, { useState } from 'react'
import { ProgressContent } from '../ProgressContent'

const ProgressBar = () => {
  const [onButton, setOnButton] = useState(0)
  const [state, setState] = useState(0)
  const useSetState = (event) =>
    setState(
      event.target.value < 0 ||
        event.target.value > 100 ||
        isNaN(event.target.value)
        ? false
        : event.target.value
    )
  console.log(typeof state)

  return (
    <div>
      <ProgressContent onButton={onButton} state={state} />
      <button
        onClick={() => setOnButton(onButton < 100 ? onButton + 10 : onButton)}>
        Add 10
      </button>
      <button
        onClick={() => setOnButton(onButton > 0 ? onButton - 10 : onButton)}>
        Minus 10
      </button>
      <input type="text" onChange={useSetState}></input>
      <p>{state === false && 'not correct value'}</p>
    </div>
  )
}

export default ProgressBar
