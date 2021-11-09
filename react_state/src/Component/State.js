import { useState } from 'react';

function State() {
  const [countSecond, setCountSecond] = useState(0);
  const [countThird, setCountThird] = useState(0);
  const [countFourth, setCountFourth] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCountSecond(countSecond + 1)}>Count</button>
        <p>
          {
                (countSecond < 10)
                  ? `${countSecond} less then 10`
                  : `${countSecond} more then 10`
}
        </p>
      </div>

      <div>
        <button onClick={() => setCountThird(countThird + 1)}>+</button>
        <p>{countThird}</p>
        <button onClick={() => setCountThird(countThird - 1)}>-</button>
      </div>

      <div>
        <button onClick={() => setCountFourth(countFourth + 1)}>+1</button>
        <button onClick={() => setCountFourth(countFourth - 1)}>-1</button>
        <button onClick={() => setCountFourth(countFourth + 10)}>+10</button>
        <button onClick={() => setCountFourth(countFourth * countFourth)}>*</button>
        <p>{countFourth}</p>
      </div>
    </div>
  );
}

export default State;
