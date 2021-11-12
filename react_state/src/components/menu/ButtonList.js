import React, { useState } from 'react'
import { LIST } from './__constants__'

const ButtonList = () => {
  const [activeButton, setActiveButton] = useState(LIST[0].li)
  console.log(activeButton)
  return (
    <>
      {LIST.map(({ li }) => (
        <p
          kye={li}
          style={
            activeButton == li
              ? { textDecoration: 'underline' }
              : { color: 'grey' }
          }
          onClick={() => setActiveButton(li)}>
          {li}
        </p>
      ))}
    </>
  )
}

export default ButtonList
