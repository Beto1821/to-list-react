import { useState } from 'react'
import './App.css'

function App() {
state = {
  todos:[]
}

addTodo(newTodo) {
  this.seState((prevState) => {
    todos: prevState.todos.concat(newTodo)
  });
}
  return (
    <main>
      
    </main>
  )
}

export default App
