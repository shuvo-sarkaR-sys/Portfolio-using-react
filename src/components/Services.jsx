import React from 'react'
import backgroundImage from '../assets/Frame 64.png'
import p1 from '../assets/p2.webp'
import p2 from '../assets/p3.webp'
import p3 from '../assets/p4.webp'
import p4 from '../assets/p6.webp'
import p5 from '../assets/p8.webp'
import p6 from '../assets/p9.webp'
import p7 from '../assets/project3.png'
import p8 from '../assets/aadi.png'
import p9 from '../assets/project.png'
 
import { Carousel } from "flowbite-react";
const Services = () => {
  return (
    <div  id='project'  className="bg-cover bg-zinc-800 md:pb-20 2xl:py-32 bg-left h-[370px] md:h-auto xl:h-auto" 
 >
       <div className="  w-full h-full rounded-[40px] ">
        {/* Your content here */}
        <div  className='pt-10 px-10'>
          <h1 className="text-white text-center mt-10 text-2xl md:text-4xl xl:text-5xl font-bold">Lets have a look at<span className='text-[#4D7DA3] font-bold'> my Portfolio</span></h1></div>


         
        
        <div className="md:mt-16 mx-auto h-56  sm:h-64 xl:h-80">
      <Carousel  >
        <div className='flex gap-1 md:gap-5 justify-center mb-10'>
        <img className='xl:w-80 md:w-48 md:h-72 h-36 w-32' src={p1} alt="..." />
        <img className='xl:w-80 md:w-48 w-32 md:h-72 h-36' src={p2} alt="..." />
        <img className='xl:w-80 md:w-48 w-32 md:h-72 h-36' src={p3} alt="..." />

        </div>
        <div className='flex gap-1 md:gap-5 justify-center mb-10'>
        <img className='xl:w-80 md:w-48 w-32 md:h-72 h-36' src={p4} alt="..." />
        <img className='xl:w-80 md:w-48 w-32 md:h-72 h-36' src={p5} alt="..." />
        <img className='xl:w-80 md:w-48 w-32 md:h-72 h-36' src={p6} alt="..." />

        </div>
        <div className='flex gap-1 md:gap-5 justify-center mb-10'>
        <img className='xl:w-80 md:w-48  w-32 md:h-72 h-36' src={p7} alt="..." />
        <img className='xl:w-80 md:w-48  w-32 md:h-72 h-36' src={p8} alt="..." />
        <img className='xl:w-80 md:w-48  w-32  md:h-72 h-36' src={p9} alt="..." />
         </div>
      </Carousel>
    </div>
      </div>
    </div>
  )
}

export default Services
