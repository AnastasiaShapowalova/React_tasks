import React from 'react'

const ProgressContent = (props) => {
  const { onButton, state } = props
  return (
    <div className="container">
      <div
        style={onButton ? { width: `${onButton}%` } : { width: `${state}%` }}
        className="spanWrapper">
        <span className="span">{(onButton ? onButton : state) || 0}</span>
      </div>
    </div>
  )
}

export default ProgressContent
