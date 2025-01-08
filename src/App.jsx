import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello This is trip Planner</h1>
      <Button variant="contained">Button</Button>
    </>
  )
}

export default App
