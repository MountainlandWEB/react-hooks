import React, { useState, useEffect } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchTodos() {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos')
      let data = await response.json()
      setTodos(data)
    }
    fetchTodos()
    return function cleanup() {
      console.log('cleanup')
    }
  }, [])
 
  function renderTodos() {
    return todos.map(todo => {
      return <div className="item" key={todo.id}>{todo.title}</div>
    })
  }
  return (
    <div className="ui list">
      <div>Todos:</div>
      { renderTodos() }
    </div>
  )
}

export default Todos