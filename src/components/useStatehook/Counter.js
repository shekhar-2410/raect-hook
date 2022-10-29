import React, { useState } from 'react';

const Counter = () => {
	const intialCount = 0;
	const [ count, setCount ] = useState(intialCount);

	return (
		<div>
			Count : {count}
			<br />
			<button onClick={() => setCount(intialCount)}>Reset</button>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
			<button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
		</div>
	);
};

export default Counter;
