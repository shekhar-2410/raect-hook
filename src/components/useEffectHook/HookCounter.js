import React, { useEffect, useState } from 'react';

const HookCounter = () => {
	const [ count, setCount ] = useState(0);
	useEffect(() => {
		document.title = `you clicked ${count} times`;
	});
	return (
		<div>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>click{count}</button>
		</div>
	);
};

export default HookCounter;
