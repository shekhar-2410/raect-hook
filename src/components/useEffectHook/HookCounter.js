import React, { useEffect, useState } from 'react';

const HookCounter = () => {
	const [ count, setCount ] = useState(0);
	const [ name, setName ] = useState('');
	useEffect(
		() => {
			console.log('useEffect-Updating document clicked');
			document.title = `you clicked ${count} times`;
		},
		[ count ]
	);
	return (
		<div>
			<input type={'text'} onChange={(e) => setName(e.target.value)} />
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>click{count}</button>
		</div>
	);
};

export default HookCounter;
