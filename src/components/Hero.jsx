import React from 'react'
import star from '../assets/star.png'
import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <div>
      <div className="">
  
        <h1 className='mx-auto mt-3 md:mt-9 border-gray-300 border-2 w-20 text-xl text-center rounded-full'>Hello</h1>
      </div>
      <div className='mx-auto text-center md:text-6xl font-semibold mt-3'>
      <h1 >I'm <span className='text-orange-400'> Shuvo</span></h1>
      <h1>Front-end Developer</h1>
      </div>
      <br />
      <div className='flex  md:justify-between mx-7 md:mx-14'>
        <p className='md:text-l font-medium text-xs'><span className='text-4xl'> "</span><br />
          Shuvo Exceptional Front-end developer  ensure our website's success.  Highly Recommended </p>
        <img className=" md:w-[550px] w-[180px] md:mt-[-63px] mt-[-20px] mr-8 md:mr-28 " src={hero} alt="" />
        <div>
        <div className='flex gap-1 md:w-6 w-3 h-3 md:h-6'><img  src={star} alt="" /><img  src={star} alt="" />
        <img   src={star} alt="" />
        <img  src={star} alt="" /> <img   src={star} alt="" />
        
        </div>
        <br />
        <h1 className='md:text-sm'><span className='md:text-4xl text-xl font-semibold'>3 YEARS</span> <br /> <span className='md:ml-14 text-gray-500'>Exprience</span> </h1>
        </div>
      </div>
      
    </div>
  )
}

export default Hero
