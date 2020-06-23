import React, { useState } from 'react'

import Todos from './Todos'
import Posts from './Posts'

const App = () => {
  const [view, setView] = useState('todos')
  const [user] = useState({
    name: 'Test User',
    email: 'test@test.com'
  })

  return (
    <div className="ui container">
      <div>
        <div>{ user.name }</div>
        <div>{ user.email }</div>
      </div>
      <button className="ui button primary" onClick={() => setView('todos')}>Todos</button>
      <button className="ui button" onClick={() => setView('posts')}>Posts</button>
      { view === 'todos' ? (<Todos />) : (<Posts />)}
    </div>
  )
}

export default App