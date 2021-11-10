import React, { useState } from 'react'
import { ARRAY } from '../../constants/ARRAY'

const Collapse = () => {
  const [state, setState] = useState(false)
  const useSetState = () => {
    setState(!state)
  }

  const collapse = ARRAY.map((item, i) => (
    <div className="panelWrapper">
      <h1 className="buttonWrapper">
        <button key={i} index={i} className="arrayButton" onClick={useSetState}>
          {item.title}
        </button>
      </h1>
      {state && <p>{item.text}</p>}
    </div>
  ))

  return (
    <div className="listClasses">
      <div>{collapse}</div>
    </div>
  )
}

export default Collapse
