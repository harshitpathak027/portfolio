import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>

    <NavBar/>
    <Banner/>
    <About/>
    <Skills/>
    </div>
    </>
  )
}

export default App
