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
import Contact from './components/Contact'
import RevealSection from './components/RevealSection'
import Projects from './components/Projects'
import BackToTop from './components/BackToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className='container'>

    <RevealSection delay={0}><Banner/></RevealSection>
    <RevealSection delay={80}><About/></RevealSection>
    <RevealSection delay={120}><Skills/></RevealSection>
    <RevealSection delay={160}><Expertise/></RevealSection>
    <RevealSection delay={180}><Projects/></RevealSection>
    <RevealSection delay={200}><Qualifications/></RevealSection>
    <CursorTrail/>
    <RevealSection delay={240}><Contact/></RevealSection>
    <BackToTop />
    </div>
    </>
  )
}

export default App
