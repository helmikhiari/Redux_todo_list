import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './reducers/counterReducer';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  console.log(counter)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{counter}</p>
        <button onClick={() => dispatch(incrementByAmount(5))}>+</button>
      </header>
    </div>
  );
}

export default App;
