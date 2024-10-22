import React from 'react'
import maskImage from '../assets/Mask group.png'

const HireMe = () => {
  return (
    <div className='md:h-screen bg-slate-200 flex py-8 md:pt-16 pl-4  gap-3 '>
      <div><img src={maskImage} alt=""/>
      
        <br />
        <br />
 
      </div>
      <div className='md:w-1/2 w-5/4 md:mt-20 '>
        <h1 className=' text-3xl md:text-5xl font-bold  '>Why <span className='text-3xl md:text-5xl font-bold text-orange-500'> Hire me</span>?</h1>
        <br />
        <br />
        <p className='text-slate-500 text-sm'>I have 2 years exprience front-end developer. I will shift your business offline to online store(e-commerce).
          I provide custom web application and clean code, maintainable, dynamic web app.
        </p>
        <br />
        <br />
        <div className='md:flex hidden md:ml-0 ml-[-40px] md:gap-40 mr-2'>
          <div>
            <h1 className='md:text-4xl   font-bold text-orange-500' >20+</h1>
            <p className='text-slate-600   font-semibold mt-2'>Project completed</p>
          </div>
          <div>
            <h1 className='md:text-4xl text-xl  font-bold text-orange-500'>20+</h1>
            <p className='text-slate-600 text-xs md:font-semibold mt-2'>Project completed</p>
          </div>

        </div>
         
        <a className='hidden md:block' href="https://www.linkedin.com/in/shuvo-sarkar-a08b06244/" target='_blank'><button className='border-2 text-3xl font-semibold p-6 rounded-2xl border-orange-500'>Hire me</button></a>
          <div className='md:hidden ml-[-60px] flex mr-2'>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold text-orange-500' >20+</h1>
            <p className='text-slate-600 font-semibold mt-2'>Project completed</p>
          </div>
          <div>
            <h1 className='md:text-4xl text-2xl font-bold text-orange-500'>20+</h1>
            <p className='text-slate-600 md:font-semibold mt-2'>Project completed</p>
          </div>
          <a className='block md:hidden' href="https://www.linkedin.com/in/shuvo-sarkar-a08b06244/" target='_blank'><button className='border-2 text-lg font-semibold p-3 w-32 rounded-2xl border-orange-500'>Hire me</button></a>
        </div>
      </div>
    

    </div>
  )
}

export default HireMe
