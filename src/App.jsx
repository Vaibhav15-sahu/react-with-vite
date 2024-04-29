import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  const Add = () => {
    setCount(count + steps)
  }

  const Delete = () => {
    setCount(count - steps)
  }

  const update = (e) => {
    setSteps(parseInt(e.target.value));
  }

  return (
    <>
      <h1>Counter : {count} </h1>
      <br />
      <h3>Number of Steps : </h3>
      <input onChange={update} ></input>
      <br />
      <button onClick={Add}>Add </button> {" "} 
      <button onClick={Delete}>Delete</button>
    </>
  )
}

export default App
