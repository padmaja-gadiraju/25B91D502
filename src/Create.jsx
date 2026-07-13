import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'

function Create() {

    const [task, setTask] = useState('')

  const handleAdd = () => {
    createTask(task)   // send task up to App
    setTask('')        // clear input
  }
  return (
     
    <main>
      <h1>Todo List</h1>

      <div className="create-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
    </main>
  )
}

export default Create