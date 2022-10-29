import React, { useState } from 'react';

const Usestatehook = () => {
	const [ count, Setcount ] = useState(0);
	const countHandler = () => {
		Setcount(count + 1);
	};
	return (
		<div>
			<button onClick={countHandler}>Count {count} </button>
		</div>
	);
};

export default Usestatehook;
