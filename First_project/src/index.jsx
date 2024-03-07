import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
    return(
        <>
            <h1>Hello how are you! What's about your love</h1>
            <a href="https://www.google.com">visit google</a>
        </>
    )
}
let message = 'Welcome';
let another_custom_element = React.createElement(
    'a',
    {href:'https://www.google.com/',target : '_blank'},
    'Click to visit google ',
    message
)

ReactDOM.createRoot(document.getElementById('root')).render(

    another_custom_element

)
