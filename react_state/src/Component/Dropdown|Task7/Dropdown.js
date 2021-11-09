import React, { useState } from 'react';
import '../../App.css'

function Dropdown() {
	const options = ['Yellow', 'Black', 'White', 'Gold'];
	const [val, setValue] = useState(false);
	const useSetValue = () => (
		setValue(true)
	)
	
	const option = options.map((text, index) => {
		return(
			<option key={index} value={index}>{text}</option>
		)
	});

	return (
		<div>
			<select onClick={useSetValue} className='selectWrapper'>
				<optgroup name='name' label="Choose one:" >
					{val ? option : <option>Choose value:</option>}
				</optgroup>
			</select>
		</div>
	)
}

export default Dropdown