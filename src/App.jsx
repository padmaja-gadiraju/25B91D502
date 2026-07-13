import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Create from './Create'
import Home from './Home'


import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {

  const [view, setView] = useState(null)


  return (
    <main>
      <h1>Todo List</h1>
      <div className="toggle-buttons">
        <button onClick={() => setView('create')}>Create</button>
        <button onClick={() => setView('list')}>List</button>
      </div>

      {view === 'create' && <Create />}
      {view === 'list' && <Home />}

    </main>
  )
}

export default App
