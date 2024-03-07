import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  var [action, set_action] = useState('White');

  let bdy = document.querySelector('#root');
  bdy.style.background = action;

  return (
    <>
      <div id="main">
        <div className="p-3 rounded-xl bg-green-50" id="controller">
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-red-500" onClick={()=>set_action('red')}>Red</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-green-500" onClick={()=>set_action('green')}>Green</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-blue-500" onClick={()=>set_action('blue')}>Blue</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-yellow-500" onClick={()=>set_action('yellow')}>Yellow</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-black" onClick={()=>set_action('black')}>Black</button>
          <button className="rounded-full px-5 py-2 text-black mx-1 bg-white" onClick={()=>set_action('white')}>White</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-pink-500" onClick={()=>set_action('pink')}>pink</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-purple-500" onClick={()=>set_action('purple')}>purple</button>
          <button className="rounded-full px-5 py-2 text-white mx-1 bg-gray-500" onClick={()=>set_action('gray')}>Gray</button>
        </div>
      </div>
    </>
  );
}

export default App;
