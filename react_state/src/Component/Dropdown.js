import React, { useState } from 'react';

function Dropdown() {
	const style = {
		width: '120px'
	}

   const options = ['Yellow', 'Black', 'White', 'Gold'];
   const [val, setValue] = useState(false);
	 
	 const onChange = () => (
		 setValue(true)
		 )
		 
		 const option = options.map((text, index) => {
					return(
					<option key={index} value={index}>{text}</option>
					)
		 });

   return <div>
      <select onClick={onChange} style={style}>
				<optgroup name='name' label="Choose one:" >
					{val ? option : <option>Choose value:</option>}
				</optgroup>
      </select>
   </div>;
}

export default Dropdown