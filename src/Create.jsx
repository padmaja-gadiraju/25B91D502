import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function Create() {

    const [task, setTask] = useState('')

  /*const handleAdd = () => {
    createTask(task)   // send task up to App
    setTask('')        // clear input
  }*/

  

    const handleAdd = () => {
    axios.post("http://localhost:5000/add", { task })
      .then(res => {
        console.log("Task saved:", res.data);
        setTask(""); // clear input
      })
      .catch(err => console.error(err));
  };



  /*const handleAdd = () => {
    axios.post("http://localhost:5000/add", { task })
      .then(res => {
        console.log("Task saved:", res.data);
        toast.success("Task created successfully!");
        setTask(""); 
      })
      .catch(err => {
        console.error("Error saving task:", err);
        toast.error("Failed to create task");
      });
  };*/

  
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
