import { Component, useState } from 'react'
import './App.css'
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

function App() {
  const [user, setUser] = useState('Maria Ellaine B. Pregunta')
  const [newTask, setNewTask] = useState('')
  const [tasklists, setTasklists] = useState([
    {
      id: 1,
      title: 'Task 1',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      completed: false
    },
    {
      id: 3,
      title: 'Task 3',
      completed: false
    }
  ])

  const handleToggleTasklist = (id) => {
    setTasklists(tasklists.map(tasklist => (
      tasklist.id === id ? {...tasklist, completed: !tasklist.completed } : tasklist
    )))
  }

  const handleRemoveTasklist = (id) => {
    setTasklists(tasklists.filter(tasklist => tasklist.id !== id))
  }

  const handleNewTask = () => {
    setTasklists([...tasklists, {id: tasklists.length + 1, title: newTask, completed: false}])
    setNewTask('')
  }

  return (
    <>
      <h1>Task List React App</h1>
      {user ? (
        <div>
          <h3>Welcome, {user}</h3>

          <input type="text" value={newTask} placeholder='Add Task' onChange={(e) => setNewTask(e.target.value)}/>
          <button onClick={handleNewTask}>Add <IoIosAddCircle /> </button>

          {tasklists.map(tasklist => (
            <li key={tasklist.id}>
              {tasklist.completed ? <s>{tasklist.title}</s> : tasklist.title}
              <input type="checkbox" checked={tasklist.completed} onChange={() => handleToggleTasklist(tasklist.id)} />
              <button onClick={() => handleRemoveTasklist(tasklist.id)}>Remove <IoIosRemoveCircle /> </button>
            </li>
          ))}
        </div>
      ) : (
        <p>You must login to view the task lists</p>
      )}
    </>
  )
}

export default App
