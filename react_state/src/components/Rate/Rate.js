import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import useSetRate from './hooks/useSetRate'

const Rating = (props) => {
  const { maxStars } = props
  const { rate, setRate } = useSetRate()
  let start = parseInt(maxStars)
  let rateArr = Array.from(Array(start).keys())

  return (
    <div className="rating">
      {rateArr.map((item, i) => {
        let ratingValue = i + 1
        return (
          <label>
            <button className="rateButton" onClick={() => setRate(ratingValue)}>
              <FaStar color={ratingValue <= rate ? '#FFD700' : '#808080'} />
            </button>
          </label>
        )
      })}
    </div>
  )
}

export default Rating
