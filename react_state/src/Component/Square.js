import {useState} from 'react'

const style1 = {
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: 'blue'
}
const style2 = {
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: 'green'
}
const style3 = {
    display: 'flex',
    alignItems: 'center',
    width: '200px',
    height: '200px',
    backgroundColor: 'red'
}

function Square() {
  const [style, setSquare] = useState(true)

  const changeSquare = () => {  
    style==false ? setSquare(true) : setSquare(false)
  }
  
  if(style == true) {
  return(
    <div>
        <div style={style1}>
        </div>
          <div style={style2} onClick={changeSquare}>
          </div>
    </div>
  )} else if (style == false) {
    return(
      <div>
          <div style={style1}>
          </div>
        <div><br></br></div>
          <div style={style3} onClick={changeSquare}>
          </div>
      </div>
    )
  }
    
}

export default Square;
