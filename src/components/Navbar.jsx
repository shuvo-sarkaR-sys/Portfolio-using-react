import React, { useState } from 'react'
import logo from '../assets/file (1).png'
import dots from '../assets/menu-dots.png'
const Navbar = () => {
    const [state, setState] = useState("Home")
    const handleClick = (link)=>{
        setState(link)
    }
  return (
    <div >
      <ul className='flex   justify-between bg-black text-white rounded-full h-16 mx-10 mt-3 items-center px-2 font-sans'>
       <a href="#"><li onClick={()=> handleClick("Home")} className={`md:px-12 px-6 py-3 md:py-3 rounded-full ${state === "Home" ? "bg-orange-400 text-white" : "text-white"}`} >Home</li></a>
        <li onClick={()=> handleClick("About")} className={`px-12 hidden md:block py-3 rounded-full ${state === "About" ? "bg-orange-400" : "text-white"}`}>About</li>
        <a href="#service"><li onClick={()=>handleClick("Service")} className={`hidden md:block px-12 py-3 rounded-full ${state === "Service" ? "bg-orange-400" : "text-white"}`}>Service</li></a>
        <a href="/"><li onClick={()=>handleClick("Img")} className={`md:px-12 px-3 py-3 ml-6 rounded-full ${state === "Img" ? "bg-orange-400" : "text-white"}`}><img className='max-w-28' src={logo} alt="" /></li></a>
        <li onClick={()=>handleClick("Resume")} className={`hidden md:block px-12 py-3 rounded-full ${state === "Resume" ? "bg-orange-400" : "text-white"}`}>Resume</li>
        <a href="#project"><li onClick={()=>handleClick("Project")} className={`md:block hidden px-12 py-3 rounded-full ${state === "Project" ? "bg-orange-400" : "text-white"}`}>Project</li></a>
        <a href="#contact"><li onClick={()=>handleClick("Contact")} className={`md:block hidden px-12 py-3 rounded-full ${state === "Contact" ? "bg-orange-400" : "text-white"}`}>Contact</li></a>
        <li onClick={()=>handleClick("Contact")} className={`md:hidden block  px-6 py-1 rounded-full ${state === "Contact" ? "bg-orange-400" : "text-white"}`}><img className='w-10' src={dots}></img></li>
      </ul>
    </div>
  )
}

export default Navbar
