import React from 'react'
import { Carousel } from "flowbite-react";
import project1 from '../assets/project2.png'
import project2 from '../assets/project3.png'
import aadi from '../assets/aadi.png'
import project from '../assets/project.png'
import movie from '../assets/movie.png'
const Project = () => {
  return (
    <div className='md:h-screen py-10' id='project'>
        <br />
        <h1 className='md:text-5xl text-2xl font-bold ml-5 '>Lets have a look at</h1>
        <h1 className='md:text-5xl text-2xl font-bold ml-5'>my <span className='text-orange-500'>Portfolio</span></h1>
       <div className="md:h-[400px] h-[200px] w-[400px] md:w-[900px]   mx-auto  ">
      <a href="https://github.com/shuvo-sarkaR-sys">
      <Carousel>
        <div className='flex gap-2'>
        <img className=' md:w-1/2' src={project1} alt="..." />
        <img className='md:w-1/2' src={project2} alt="..." />
        </div>
        <div className='flex gap-2'>
            <img className='md:w-1/2'  src={aadi} alt="..." />
        <img className='md:w-1/2'  src={project} alt="..." />
        </div>
        <img className='md:w-2/3' src={movie} alt="..." />
      </Carousel></a>
      <br />
      <br />
    </div>
    <div className='flex gap-3 w-2/3 mx-auto mt-4 flex-wrap'>
    <div className='border-2 p-1 rounded-lg'>Landing page</div>
    <div className='border-2 p-1 rounded-lg'>Personal portfolio</div>
    <div className='border-2 p-1 rounded-lg'>Email templete</div>
    <div className='border-2 p-1 rounded-lg'>Animation</div>
    <div className='border-2 p-1 rounded-lg'>Dashboard</div>
    <div className='border-2 p-1 rounded-lg'>E-commerce web</div>
    <div className='border-2 p-1 rounded-lg'>Education(Edtech)</div>
    </div>
    </div>
 )
}

export default Project
