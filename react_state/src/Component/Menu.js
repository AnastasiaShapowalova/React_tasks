import React, { useState } from 'react';

function Dropdown() {
   const options = ['Yellow', 'Black', 'White', 'Gold'];
   const [value, setValue] = useState('');

   const option = options.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
   });

   return <div>
      <select  onChange={(event) => setValue(event.target.value)}>
				<optgroup name='name' label="Choose one:">
					{option}
				</optgroup>
      </select>
   </div>;
}

export default Dropdown