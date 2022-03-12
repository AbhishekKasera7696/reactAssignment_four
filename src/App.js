import React from 'react';
import "./index.css"
export default function App(){
  const [counter, setCounter] = React.useState(0)

  const increaseButton = (value) => {
    setCounter(counter + value) 
 }
 const increaseButton2 = (value) => {
  setCounter(counter * value) 
}

  return (
    <div className="App">
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={() => increaseButton(1)} >ADD</button>
    <button onClick={() => increaseButton(-1)}>REDUCE</button>
    <button onClick={() => increaseButton2(2)}>Double</button>
  
    </div>
  );
}
