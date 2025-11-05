import Challange from './components/Challange'

import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>oi</p>
        <Challange/>
      </div>
    </>
  )
}

export default App
