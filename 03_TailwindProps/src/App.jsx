import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
<h1 className='bg-blue-300 p-10 rounded-xl' >Tailwind css</h1>
<Card username="Sakshi" btnText="click me"/>
   </>
  )
}

export default App
