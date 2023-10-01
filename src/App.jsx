
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from "./counter/CounterSplice";
function App() {
  const dispach = useDispatch()
  let count = useSelector((state) => state.counter.value);
  const handleDecrement = ()=>{

    dispach(decrement())
    
  }
  
  

  return (
    <>
      <h4 style={{ fontSize: "30px" }}>{count}</h4>
      <button
        onClick={() => {
          dispach(increment());
        }}
      >
        increment
      </button>
      <button onClick={handleDecrement} style={{ marginLeft: "20px" }}>
        decrement
      </button>
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => {
          dispach(reset());
        }}
      >
        Reset
      </button>
    </>
  );
}

export default App
