import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decreament':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};
const CounterOne = () => {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	return (
		<div>
			<div>
				<h2 style={{ color: 'orange', fontWeight: 'bold' }}>
					{' '}
					Count : <span style={{ color: 'blue', fontSize: '30px', fontWeight: 'normal' }}>{count}</span>
				</h2>
			</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decreament')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	);
};

export default CounterOne;
