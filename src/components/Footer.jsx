import React from 'react'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
const Footer = () => {
    return (
        <div className='bg-zinc-800 text-slate-300 ' id='contact'>
            <br />
            <div className='flex mx-5 justify-between md:mx-20 xl:mx-40 my-5'>
                <h1 className='xl:text-4xl md:text-3xl text-xl font-bold'>Lets Connect there</h1>
                <button className='bg-orange-500 px-8 rounded-3xl md:rounded-full border-2 text-xl text-white'>Hire me</button>
            </div>
             
            <br />
            <div className='flex justify-center gap-5 md:gap-16 my-5 md:my-14 mx-6'>
                <div>
                    <h1 className='font-bold text-xl'>Shuvo</h1>
                    <br />
                    <p className=' '>
                       I have 2 years exprience front-end developer. I will shift your business offline <br /> to online store(e-commerce). I provide custom web application and clean code,<br /> maintainable, dynamic web app.
                    </p>
                    <br />
                    <div className='flex gap-3'>
                        <a href="https://www.facebook.com/mdshuvo.sorkar.92" target='_blank'><img className='w-7' src={facebook} alt="" /></a>
                        <a href="https://www.linkedin.com/in/shuvo-sarkar-a08b06244"><img className='w-7' src={linkedin} alt="" /></a>
                        <a href="https://wa.me/01887316487"></a><img className='w-7' src={whatsapp} alt="" />
                        <img className='w-7' src={twitter} alt="" />
                    </div>
                </div>
                <div>
                    <h1>Navigation</h1>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Resume</li>
                        <li>Project</li>
                    </ul>
                </div>
                <div>
                    <h1>Contact</h1>
                    <h1>md.sirforce@gmail.com</h1>
                    <h1>shuvo sarkar</h1>
                    <br />
                    <div className='block md:hidden'>GET The latest information</div>
                </div>
                <div className='md:block hidden'>GET The latest information</div>
                
               
            </div>
            <br />
            <hr />
             <br />
                <p className='text-center'>Copyright 2024 Shuvo sarkar. all Right</p>
                <br />
        </div>
    )
}

export default Footer
