import React, { useState } from 'react';
import { CARDS } from './CARDS';
import '../../App.css'

function Card() {
	const [mainCards, showCard] = useState(false);
	const [index, showIndex] = useState(2);

	const useShowCard = () => showCard(!mainCards)
	const useShowIndex = () => showIndex( index + 2 )

	const shown = CARDS.map((mainCards, i) => {
		if (i < index) {
			return <li value={i} className='card'>{mainCards.Title}<br/>{mainCards.Content}</li>
		}
		})

   return (
	 <div className='cardWrapper'>
      <button onClick={ useShowCard }>Add cards</button>
			{mainCards ? shown : null}
			<br/>
			{( index < shown.length && mainCards) ? <button onClick={ useShowIndex }>Show more</button> : null }
   </div>
	 )
}

export default Card