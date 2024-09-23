import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DECREMENT, INCREMENT } from './actions/actions';

function App() {  
  const dispatch = useDispatch(); 
  const counter = useSelector((state) => state.counter);
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(DECREMENT())}>-</button>
        <p>{counter}</p>
        <button onClick={() => dispatch(INCREMENT())}>+</button>
      </header>
    </div>
  );
}

export default App;
