import React, { useEffect, useState } from 'react'
import {TodoProvider} from './context/index'

export default function App() {
  const [todos, setTodos] = useState([]);
  function addTodo (){
    setTodos ((prev) => [{id: Date.now(),...prev}, ...prev])
  }
  function updateTodo() {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }
  function deleteTodo() {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  function toggleComplete() {
    setTodos()
  }
  useEffect(() => {}, [])
  useEffect (() => {}, [])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

    </TodoProvider>
  )
}
