import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  const Add = () => {
    setCount(count + 1)
  }

  const Delete = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Counter : {count} </h1>
      <br />
      <button onClick={Add}>Add </button> {" "} 
      <button onClick={Delete}>Delete</button>
    </>
  )
}

export default App
