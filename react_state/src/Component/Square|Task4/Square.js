import React, { useState } from 'react'
import '../../App.css';

function Square() {
  const [style, setSquare] = useState(true)
  const useChangeSquare = () => {  
    style === false ? setSquare(true) : setSquare(false)
  }
  
  if(style === true) {
		return(
			<div>
				<div className = 'squareBlue'/>
				<div className = 'squareGreen' onClick={useChangeSquare}/>
			</div>
	)} else if (style === false) {
			return(
				<div>
					<div className = 'squareBlue'/>
					<br/>
					<div className = 'squareRed' onClick={useChangeSquare}/>
				</div>
			)
  }
    
}

export default Square;
