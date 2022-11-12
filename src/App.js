import logo from './logo.svg';
import './App.css';
import Usestatehook from './components/useStatehook/Usestatehook';
import Counter from './components/useStatehook/Counter';
import Counter2 from './components/useStatehook/Counter2';
import Counter3 from './components/useStatehook/Counter3';
import HookCounter from './components/useEffectHook/HookCounter';
import Hookmouse from './components/useEffectHook/Hookmouse';
import MouseContainer from './components/useEffectHook/MouseContainer';
import IntervalHookCounter from './components/useEffectHook/IntervalHookCounter';
import DataFetching from './components/useEffectHook/DataFetching';
import CounterOne from './components/useReduceHook/CounterOne';
import CounterTwo from './components/useReduceHook/CounterTwo';
import Datafetch from './components/useStatehook/Datafetch';
import Getdata from './components/useReduceHook/FetchPostdat.js';
import FocusInput from './components/useRef/FocusInput';
import Hooktimer from './components/useRef/Hooktimer';

function App() {
	return (
		<div className="App">
			<h1>React Hooks</h1>
			{/* useStateHook */}
			{/* <Usestatehook /> */}
			{/* <Counter /> */}
			{/* <Counter2 /> */}
			{/* <Counter3 /> */}
			{/* <Datafetch /> */}
			{/* useEffectHook */}
			{/* <HookCounter /> */}
			{/* <Hookmouse /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalHookCounter /> */}
			{/* <DataFetching /> */}
			{/* useReducerHook */}
			{/* <CounterOne /> */}
			{/* <CounterTwo /> */}
			<Getdata />
			{/* inputref */}
			<FocusInput />
			<Hooktimer />
		</div>
	);
}

export default App;
