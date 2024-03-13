import React,{useState, useContext} from 'react'
import UserContext from '../context/TodoContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handler = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <h2>Please Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <button onClick={handler}>Submit</button>
    </div>
  )
}

export default Login 