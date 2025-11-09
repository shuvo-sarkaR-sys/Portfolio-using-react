import React from 'react'
import star from '../assets/star.png'
import hero from '../assets/img10.jpg'
const Hero = () => {
  return (
    <div>
      <div  >
  
        <h1 className='mx-auto mt-3 md:mt-14 xl:mt-20 border-gray-300 border-2 w-20 text-xl text-center rounded-full'>Hello</h1>
      </div>
      <div className='mx-auto text-center text-4xl md:text-4xl xl:text-6xl 2xl:text-7xl font-semibold mt-3'>
      <h1 >I'm <span className='text-[#4D7DA3]'>Smith</span></h1>
      <h1>Front-end Developer</h1>
      </div>
      <br />
      <div className='flex md:mt-20 mt-0 mb-10 md:mb-20 md:flex-row flex-col items-center md:justify-between mx-7 md:mx-14'>
        <p className='md:text-lg 2xl:text-2xl md:w-[28%] xl:w-[33%] font-medium  '><span className='text-4xl'>"</span> 
        Smith Exceptional Front-end developer  ensure our website's success.  Highly Recommended </p>
        <img className=" xl:w-[33%] md:w-[38%]  rounded-full   md:mt-[-63px] md:my-0 my-5  " src={hero} alt="" />
        <div className='xl:w-[30%] md:pl-14 xl:pl-36 '>
        <div className='flex gap-1 md:w-6 w-3 h-3 2xl:w-10 2xl:h-10 md:h-6'><img  src={star} alt="" />
        <img  src={star} alt="" />
        <img   src={star} alt="" />
        <img  src={star} alt="" /> <img   src={star} alt="" />
        
        </div>
         
        <h1 className='md:text-sm mt-0 md:mt-5 '><span className='xl:text-5xl md:text-4xl 2xl:text-7xl text-xl font-semibold'>3 YEARS</span> <br /> <span className='md:ml-14 2xl:text-2xl text-gray-500'>Exprience</span> </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
