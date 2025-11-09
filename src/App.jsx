import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Skill from './components/Skill'
import HireMe from './components/HireMe'
import Project from './components/Project'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import AboutPage from './components/AboutPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='home'>
      <BrowserRouter>
        <Navbar />
       
      
   
    <Hero/>
    <Services/>
    <Skill/>
    <HireMe/>
     <ContactForm/> 
     
           <AboutPage /> 
         
    <Footer/>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
