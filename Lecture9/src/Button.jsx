import React from 'react'

function Button(props) {
    var [action, set_action] = useState('White');

    let bdy = document.querySelector('#root');
    bdy.style.background = action;

  return (
    <div>
        <button className="rounded-full px-5 py-2 text-white mx-1 bg-red-500" onClick={()=>set_action('red')}>{props.color}</button>
    </div>
  )
}

export default Button