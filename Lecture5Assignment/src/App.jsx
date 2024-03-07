import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var [counter, setCounter] = useState(0);

  function add_value(){
    setCounter(counter + 1);
  }
  function reduce_value(){
    if(counter == 0){
      return;
    }
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Hello How are you!!</h1>
      <button>{counter}</button>
      <br />
      <button onClick={add_value}>Add value</button>
      <button onClick={reduce_value}>Remove value</button>
    </>
  )
}

export default App
