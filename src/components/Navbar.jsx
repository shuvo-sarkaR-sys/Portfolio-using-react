import React, { useState } from 'react'
import logo from '../assets/file (1).png'
import dots from '../assets/menu-dots.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [state, setState] = useState("Img")
    const handleClick = (link)=>{
        setState(link)
    }
  return (
    <div >
      <ul className='flex   justify-between bg-zinc-800 text-white   h-16 px-4 w-full  xl:px-36  mt-0 items-center   font-sans'>
                <a href="#project"><li   >Project</li></a>

                  <a href="https://drive.google.com/file/d/1QjaGzZapn92HZvu9WrdUbwoazxXkT79s/view?usp=sharing" target='_blank' rel="noopener noreferrer"><li >Resume</li></a>

        <a href="/"><li onClick={()=>handleClick("Img")} className={`md:px-12 p-1 ml-0 md:ml-6 rounded-full ${state === "Img" ? "bg-[#4D7DA3]" : "text-white"}`}><img className='md:w-28 w-12' src={logo} alt="" /></li></a>
             <a href="#about"> <li>About</li></a> 

         <a href="#contact"><li  >Contact</li></a>
       </ul>
    </div>
  )
}

export default Navbar
