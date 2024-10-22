import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Skill from './components/Skill'
import HireMe from './components/HireMe'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='home'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Skill/>
    <HireMe/>
    <Project/>
    <Footer/>
    </div>
    </>
  )
}

export default App
