import { useState } from "react"

function InputText (props) {
    const {max, min} = props
    const [value, setValue] = useState('');

const submitValue = () => {
       const Value = value
    if(Value.length <= min){
        alert('too little symbols')
    } else if(Value.length >= max){
        alert('too many symbols')
    }
}

return(
    <div>
        <input type="text" placeholder="Name" onChange={e => setValue(e.target.value)} maxlength="max"/>
        <button onClick={submitValue}>Submit</button>
    </div>
    )
}
export default InputText 