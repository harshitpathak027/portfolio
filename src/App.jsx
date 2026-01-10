import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner'
import NavBar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Expertise from './components/Expertise'
import Qualifications from './components/Qualifications'
import CursorTrail from './components/CursorTrail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className='container'>

    <Banner/>
    <About/>
    <Skills/>
    <Expertise/>
    <Qualifications/>
    <CursorTrail/>
    </div>
    </>
  )
}

export default App
