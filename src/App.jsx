import { useState } from 'react'
import HomeScreen from './HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeScreen />}/>
          <Route path='/test' element={<h1>Hello you</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
