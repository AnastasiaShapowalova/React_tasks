import { useState } from 'react';

function State() {
	// part 1 
  const [countSecond, setCountSecond] = useState(0);
	const useCountSecond = () => setCountSecond(countSecond + 1)

	// part 2
  const [countThird, setCountThird] = useState(0);
	const useCountThirdPlus = () => setCountThird(countThird + 1)
	const useCountThirdMinus = () => setCountThird(countThird - 1)

	//part 3
  const [countFourth, setCountFourth] = useState(0);
	const useCountFourthPlus = () => setCountFourth(countFourth - 1)
	const useCountFourthMinus = () => setCountFourth(countFourth - 1)
	const useCountFourthPlusTen = () => setCountFourth(countFourth + 10)
	const useCountFourthMultiply = () => setCountFourth(countFourth * countFourth)

  return (
		// part 1
    <div>
      <div>
        <button onClick={useCountSecond}>Count</button>
        <p>
          {
						(countSecond < 10)
						? `${countSecond} less then 10`
						: `${countSecond} more then 10`
					}
        </p>
      </div>
			{/* part 2 */}
      <div>
        <button onClick={useCountThirdPlus}>+</button>
        <p>{countThird}</p>
        <button onClick={useCountThirdMinus}>-</button>
      </div>
			{/* part 3 */}
      <div>
        <button onClick={useCountFourthPlus}>+1</button>
        <button onClick={useCountFourthMinus}>-1</button>
        <button onClick={useCountFourthPlusTen}>+10</button>
        <button onClick={useCountFourthMultiply}>*</button>
        <p>{countFourth}</p>
      </div>
    </div>
  );
}

export default State;
