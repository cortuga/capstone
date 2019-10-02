import React, { useState } from "react"

export default function Todos() {
  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([{ id: 1, text: "default_todos_text" }])

  function handleNewTodoChange(e) {
    e.preventDefault()
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault() //grabs the current state of newTodo
    if (newTodo === "") return //if newtodo is empty then return and do nothing
    setTodos([...todos, { id: Date.now(), text: newTodo }])
    e.target.reset()
    // console.log(newTodo)
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleNewTodo}>
        <input
          placeholder='Your todo...'
          onChange={handleNewTodoChange}
        ></input>

        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {" "}
              {todo.text}
              <button onclick={() => removeTodo(todo.id)}>x</button>
            </li>
          ))}
        </ul>
      </form>
    </>
  )
}
