import { useState } from "react";
import ShowButton from './ShowButton'

function State() {
    const [countSecond, setCountSecond] = useState(0)
    const [countThird, setCountThird] = useState(0)
    const [countFourth, setCountFourth] = useState(0)

   let p
   if(countSecond > 10) {
        p = <p>{countSecond} Count is more then 10</p>
    } else {
        p = <p>{countSecond} Count is less then 10</p>
    }
    return(
        <div>
            <div>
                <button onClick={() => setCountSecond(countSecond+1)}>Count</button>
                <p>{p}</p>
            </div>

            <div>
                <button onClick={() => setCountThird(countThird+1)}>+</button>
                <p>{countThird}</p>
                <button onClick={() => setCountThird(countThird-1)}>-</button>
            </div>

            <div>
                <button onClick={() => setCountFourth(countFourth+1)}>+1</button>
                <button onClick={() => setCountFourth(countFourth-1)}>-1</button>
                <button onClick={() => setCountFourth(countFourth+5)}>+5</button>
                <p>{countFourth}</p>
            </div>

            <ShowButton/>
        </div>
    )
}

export default State