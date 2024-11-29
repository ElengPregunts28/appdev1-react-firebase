import { Component, useState } from 'react'
import './App.css'
import ListTask from './Components/ListTask'; 

function App() {
  const [user, setUser] = useState('Eleng!')
  return (
    <>
      <h1>Task List React App</h1>
      {user ? (
        <ListTask user={user} />
      ) : (
        <p>You must login to view the task lists</p>
      )}
    </>
  )
}

export default App
