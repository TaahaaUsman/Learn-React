import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  let [numbers, setNumbers] = useState(false);
  let [special_character, setSpecial_character] = useState(false);
  let [len,setlen] = useState(8);
  let [password, setPassword] = useState('');
  let password_refrence = useRef(null);

   const password_generator = useCallback(() => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqstuvwxyz';
      if(numbers){
        str += '0123456789';
      }
      if(special_character){
        str += '`!@#$%^&*()[]{};:"?/*-+';
      }
      for(let i = 1; i <= len; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
      }
      setPassword(pass);

   }, [numbers, special_character, len])

  let copy_password_on_clipboard = useCallback(()=>{
    password_refrence.current?.select();
    password_refrence.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
    alert('Copy to clipboard');
  },[password])

   
   useEffect(()=>{
     password_generator();
   }, [numbers, special_character, len])

  return (
    <>
    <div className="major flex justify-center mt-6">
    <div className="container bg-blue-400 w-1/2 rounded pb-3">

      <h1 className='text-2xl font-bold my-4 text-center'>Password Generator</h1>

      <input type="text" className='w-2/3 py-2 ml-12 px-2 rounded-tl-lg rounded-bl-lg' placeholder='password' value={password} readOnly ref={password_refrence}/>
      <button className='bg-blue-800 px-5 py-2 text-bolder rounded-tr-lg rounded-br-lg' onClick={copy_password_on_clipboard}>copy</button>

      <div className="lastRow mt-4 flex justify-center align-middle">

      <input type="range" min={6} max={30} value={len} className='cursor-pointer' onChange={(e)=>{setlen(e.target.value)}}/>
      <label className='mr-4'>Lenght:{len}</label>

      <input type="checkbox" className='ml-6 curs' onChange={()=>{
        setNumbers((prev) => !prev)
      }}/>
      <label>Numbers</label>

      <input type="checkbox" className='ml-6 cursor-pointer' onChange={()=> {
        setSpecial_character((prev) => !prev)
      }}/>
      <label>Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
