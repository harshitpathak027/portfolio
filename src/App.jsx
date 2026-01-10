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
    </div>
    </>
  )
}

export default App
