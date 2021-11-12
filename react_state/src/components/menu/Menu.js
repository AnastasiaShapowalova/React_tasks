import React from 'react'
import { useSetList } from './hooks'
import { ButtonList } from '..'

const Menu = (props) => {
  const { showList, useSet } = useSetList(false)

  return (
    <div style={{ cursor: 'pointer' }}>
      <button onClick={useSet}>Choose one: </button>
      {showList && <ButtonList />}
    </div>
  )
}

export default Menu
