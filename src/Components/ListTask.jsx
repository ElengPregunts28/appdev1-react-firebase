import { useEffect, useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

const ListTask = ({ user }) => {
    const [newTask, setNewTask] = useState('')
    const [tasklists, setTasklists] = useState([])
    
    const fetchTasks = async (Limit = 10) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${Limit}`)
            const data = await response.json()     
            setTasklists(data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

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
                <div>
                <h3>Here's what you've got to do.</h3>

                <input type="text" className="user-input" value={newTask} placeholder='Add Task' onChange={(e) => setNewTask(e.target.value)}/>
                <button className="add-button" onClick={handleNewTask}><IoIosAddCircle /> Add </button>

                {tasklists.map(tasklist => (
                    <li key={tasklist.id}>
                        <input type="checkbox" checked={tasklist.completed} onChange={() => handleToggleTasklist(tasklist.id)} />
                        <span className={tasklist.completed ? "completed-task" : "pending-task"}>{tasklist.title}</span>
                        <button className="remove-button" onClick={() => handleRemoveTasklist(tasklist.id)}><IoIosRemoveCircle /> Remove </button>
                    </li>
                ))}
                </div>        
            </>
    )
}

export default ListTask