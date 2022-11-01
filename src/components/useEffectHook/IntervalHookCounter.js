import React, { useEffect, useState } from 'react';

const IntervalHookCounter = () => {
	const [ count, setCount ] = useState(0);
	const tick = () => {
		setCount(preCount => preCount + 1);
	};
	useEffect(() => {
        function doSomething() {
         alert('TickTok') 
        }
        doSomething()
		const interval = setInterval(tick, 1000);
        return()=>{
            clearInterval(interval)
        }
	},[]);
	return (
		<>
           
			<h2 style={{fontSize:'40px',fontWeight:"bold",border:"2px solid green",borderRadius:"70%"}}>{count}</h2>
		</>
	);
};

export default IntervalHookCounter;
