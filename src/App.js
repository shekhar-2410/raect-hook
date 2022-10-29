import logo from './logo.svg';
import './App.css';
import Usestatehook from './components/useStatehook/Usestatehook';
import Counter from './components/useStatehook/Counter';
import Counter2 from './components/useStatehook/Counter2';
import Counter3 from './components/useStatehook/Counter3';
import HookCounter from './components/useEffectHook/HookCounter';

function App() {
	return (
		<div className="App">
			<h1>React Hooks</h1>
			{/* useStateHook */}
			{/* <Usestatehook /> */}
			{/* <Counter /> */}
			{/* <Counter2 /> */}
			{/* <Counter3 /> */}

			{/* useEffectHook */}
			<HookCounter />
		</div>
	);
}

export default App;
