import React, { useState, useEffect, useRef } from 'react';

const Hooktimer = () => {
	const [ timer, setTimer ] = useState(0);
	const intervalRef = useRef();

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setTimer((prevTimer) => prevTimer + 1);
		}, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);
	return (
		<div>
			Hook Timer - {timer}
			<button onClick={() => window.location.reload(false)}>Restart</button>
			<button onClick={() => clearInterval(clearInterval(intervalRef.current))}>Pause</button>
			{/* <button onClick={() => setTimer(intervalRef.current)}>start</button> */}
		</div>
	);
};

export default Hooktimer;
