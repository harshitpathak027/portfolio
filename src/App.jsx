import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Expertise from './components/Expertise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>

    <NavBar/>
    <Banner/>
    <About/>
    <Skills/>
    <Expertise/>
    </div>
    </>
  )
}

export default App
