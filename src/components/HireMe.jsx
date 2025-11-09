import React from 'react'
import maskImage from '../assets/Mask group.png'

const HireMe = () => {
  return (
    <div className='md:h-auto bg-zinc-800 md:gap-5 flex md:flex-row flex-col justify-center py-8 md:pt-16  xl:px-10 gap-3 '>
      <div className='md:w-1/2'><img src={maskImage} alt=""/>
      
        <br />
        <br />
 
      </div>
      <div className='xl:w-1/2 md:w-1/3 w-[95%] mx-auto md:text-start text-center xl:mt-20 '>
        <h1 className=' text-3xl  xl:text-5xl font-bold text-white  '>Why <span className='text-3xl xl:text-5xl font-bold text-orange-500'> Hire me</span>?</h1>
         
        <p className='text-gray-300 mt-5 md:mt-10 xl:mt-20 text-lg'>I have 2 years exprience front-end developer. I will shift your business offline to online store(e-commerce).
          I provide custom web application and clean code, maintainable, dynamic web app.
        </p>
        
        <div className='md:flex hidden xl:mt-20 md:mt-8 md:ml-0 ml-[-40px] xl:gap-40 mr-2'>
          <div>
            <h1 className='xl:text-4xl md:text-3xl  font-bold text-orange-500' >20+</h1>
            <p className='text-gray-200 text-lg  font-semibold mt-2'>Project completed</p>
          </div>
          <div>
            <h1 className='xl:text-4xl text-xl md:text-3xl  font-bold text-orange-500'>20+</h1>
            <p className='text-gray-200 text-lg md:font-semibold mt-2'>Project completed</p>
          </div>

        </div>
         
        <a className='hidden  w-40 md:block' href="https://www.linkedin.com/in/shuvo-sarkar-a08b06244/" target='_blank'><button className='border-2  text-3xl font-semibold   rounded-2xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white md:mt-8 xl:mt-20 py-3 px-6'>Hire me</button></a>
          <div className='md:hidden ml-0 mt-4  md:ml-[-60px] flex justify-center gap-5  flex-wrap mr-2'>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold text-orange-500' >20+</h1>
            <p className='text-gray-400 font-semibold mt-2'>Project completed</p>
          </div>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold text-orange-500'>20+</h1>
            <p className='text-gray-400 md:font-semibold mt-2'>Project completed</p>
          </div>
          <a className='block w-full md:hidden' href="https://www.linkedin.com/in/shuvo-sarkar-a08b06244/" target='_blank'><button className='border-2 text-lg font-semibold p-3 text-white w-full mt-5 rounded-2xl border-orange-500'>Hire me</button></a>
        </div>
      </div>
    

    </div>
  )
}

export default HireMe
