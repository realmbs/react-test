import { useState } from 'react'
import Greeting from './Greeting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <Greeting />
    </>
  )
}

export default App
