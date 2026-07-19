import { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Home.css'
import axios from "axios"

function Home() {
  //const sampleTasks = ["Task 1", "Task 2", "Task 3"]

    const [tasks, setTasks] = useState([]);


  useEffect(() => {
      fetchTasks();
    }, []);


     const fetchTasks = () => {
    axios.get("http://localhost:5000/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task._id !== id)); // update UI instantly
      })
      .catch(err => console.error("Error deleting task:", err));
  };

  const handleEdit = (id, currentName) => {
    const newName = prompt("Edit task:", currentName);
    if (newName && newName.trim() !== "") {
      axios.put(`http://localhost:5000/tasks/${id}`, { name: newName })
        .then(() => {
          setTasks(tasks.map(task =>
            task._id === id ? { ...task, name: newName } : task
          ));
        })
        .catch(err => console.error("Error updating task:", err));
    }
  };

  // Fetch tasks from backend when component loads
  /*useEffect(() => {
    axios.get("http://localhost:5000/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);*/


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
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>
                <button onClick={() => handleEdit(task._id, task.name)}>Edit</button>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
