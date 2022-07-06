import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  const [todos, setTodos] = useState([])

const addTodo = (newTodo) => {
  setTodos(todos.concat(newTodo));
}


  return (
    <main>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </main>
  )
}


export default App
