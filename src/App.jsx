import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasks from "./components/Tasks"
import DoneTasks from "./components/DoneTasks"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Taski</h1>
      <main>
        <h2>Todo</h2>
        <Tasks />
        <hr />
        <h2>Done</h2>
        <DoneTasks />
      </main>
    </>
  )
}

export default App
