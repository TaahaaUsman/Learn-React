import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [val, setVal] = useState('');

  function add_value(){
    if(val == ''){
      val = 1;
      setVal(val);
      return;
    }
    val = val + 1;
    setVal(val);
    console.log('Value is Updated !');
  }
  function reduce_value (){
    if(val == ''){
      val = -1;
      setVal(val);
      return;
    }
    val = val -1;
    setVal(val);
    console.log('Value is Reduced');
  }

  return (
    <>
      <h1>Welcome to Learn Hooks {val}</h1>
      <button onClick={add_value}>Add Value {val}</button>
      <button onClick={reduce_value}>Reduce Value {val}</button>
      <p>Some thing: {val}</p>


    </>
  )
}

export default App
