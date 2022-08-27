import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementBy, reset } from './store/slices/counter'

function App() {
  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

	return (
		<div className='App'>
			<h1>count is {counter}</h1>
			<button onClick={() => dispatch(increment())}>
				Increment
			</button>

			<button onClick={() => dispatch(decrement())}>
				Decrement
			</button>

			<button onClick={() => dispatch(incrementBy(2))}>
				increment By
			</button>

			<button onClick={() => dispatch(reset())}>
				reset
			</button>
		</div>
	)
}

export default App
