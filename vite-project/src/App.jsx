import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css'


function App() {
  const [todos, setTodos] = useState([])

const addTodo = (newTodo) => {
  setTodos((todos) =>[...todos, newTodo]);
}


  return (
    <main>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  )
}


export default App
