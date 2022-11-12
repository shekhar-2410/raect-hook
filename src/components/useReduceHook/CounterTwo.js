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
const CounterTwo = () => {
	const [ count, dispatch ] = useReducer(reducer, initialState);
	const [ count2, dispatch2 ] = useReducer(reducer, initialState);
	return (
		<div>
			<div>
				<h2 style={{ color: 'orange', fontWeight: 'bold' }}>
					Count : <span style={{ color: 'blue', fontSize: '30px', fontWeight: 'normal' }}>{count}</span>
					Count2 : <span style={{ color: 'blue', fontSize: '30px', fontWeight: 'normal' }}>{count2}</span>
				</h2>
			</div>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decreament')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>

			<div>
				<button onClick={() => dispatch2('increment')}>Increment</button>
				<button onClick={() => dispatch2('decreament')}>Decrement</button>
			</div>
		</div>
	);
};

export default CounterTwo;
