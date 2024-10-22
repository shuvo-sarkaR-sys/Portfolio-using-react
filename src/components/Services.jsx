import React from 'react'
import backgroundImage from '../assets/Frame 64.png'
import { Carousel } from "flowbite-react";
const Services = () => {
  return (
    <div id='service'  className="bg-cover bg-black bg-left h-[370px] md:h-screen rounded-[25px] md:rounded-[40px] "
    style={{ backgroundImage: `url(${backgroundImage})` }}>
       <div className="  w-full h-full rounded-[40px]">
        {/* Your content here */}
        <div  className='pt-10 px-10'><h1 className="text-white text-2xl md:text-4xl font-medium">My <span className='text-orange-500 font-semibold'>service</span></h1></div>


         
        
        <div className="md:mt-16 mx-auto h-56  sm:h-64 xl:h-80 2xl:h-96">
      <Carousel  >
        <div className='flex gap-2 md:gap-5 justify-center mb-10'>
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        
        </div>
        <div className='flex gap-5 justify-center mb-10'>
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        
        </div>
        <div className='flex gap-5 justify-center mb-10'>
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img className='md:w-72 w-32' src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
         </div>
      </Carousel>
    </div>
      </div>
    </div>
  )
}

export default Services
