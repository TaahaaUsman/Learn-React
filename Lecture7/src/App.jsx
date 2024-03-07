import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  let userInfo = {
    src : "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60",
  }
  let userData = {
    name : 'Taahaa Usman',
    discription : 'My Name is Taahaa. And i am ineverable.I fight countless tmes but i never enjoy it.'
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl inline-block p-5 m-5'>This is my Heading</h1>
      <div className="container flex">
      <Card src={userInfo} user = {userData} />
      <Card src={userInfo} />
      <Card src={userInfo} user = {userData} />
      <br />
      </div>
    </>
  )
}

export default App
