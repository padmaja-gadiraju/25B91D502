import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Home.css'

function Home() {
  const sampleTasks = ["Task 1", "Task 2", "Task 3"]

  return (
    <div>
      

      <table className="todo-table">
        <thead>
          <tr>
            <th>TO DO List</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sampleTasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
