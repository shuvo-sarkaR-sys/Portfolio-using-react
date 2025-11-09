import React, { useState } from 'react'
import Navbar from './Navbar';
 
function ContactForm() {

  const [text, setText] =useState(false)
    const handleSubmit = async (e) => {
      e.preventDefault();
     setText(true);

      setTimeout(() => setText(false), 3000);
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        number: e.target.number.value,
        message: e.target.message.value,
      };
    
      const res = await fetch('https://backendv1-wwqz.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    
      const data = await res.json();
      alert(data.message);
      e.target.reset();
    
    
 
    
     
     
    };
  
    return (
      <div>

      <div>
        <h1 className='text-center text-[#4D7DA3] font-bold md:text-3xl xl:text-5xl md:mt-16 mt-6 2xl:mt-36'>GET IN TOUCH</h1>
        <div className='relative xl:gap-0 gap-8  flex flex-wrap my-4 md:my-16  justify-between 2xl:pb-36 xl:mx-52 mx-5'>
        <div className='xl:w-[40%] w-full '>
          <h1 className='xl:text-5xl text-3xl font-bold my-10'>Don't hesitate to say hello with us!</h1>
          <div>
            <div>
            <span className='text-lg  font-semibold'>Email:</span>
            <p>sirforce@gmail.com</p>
            </div>
            
            <div className='mt-3'>
              <span className='text-lg font-semibold'>Address:</span>
              <p>Bogura, Bangladesh</p>
            </div>
          </div>
        </div>
      <form className='flex flex-col shadow-2xl border-r-7 border-b-7 border-[#098de4] xl:w-[45%] gap-10  rounded-4xl p-10 w-full  justify-center' onSubmit={handleSubmit}>
        <input className=' border-b-2 pb-2 px-5 pt-4 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="name" type="text" required placeholder="Name" />
        <input className=' border-b-2 pb-2 pt-4 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="email" type="email" required placeholder="Email" />
                <input className=' border-b-2 pb-2 pt-4 px-5 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="number" type='tel'  placeholder="Enter your phone number" />

        <textarea className=' border-b-2  pt-3 px-5 min-h-18  mt-5 text-lg border-gray-300 focus:outline-none focus:border-[#0866fd] ' name="message" required placeholder="Your message"></textarea>
        <button type="submit" className='cursor-pointer flex justify-end text-3xl mt-4 md:mt-10 items-center gap-3 font-semibold'>Let's Talk <span className='bg-[#4D7DA3] p-2 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
</span></button>
      </form>
      </div>
      {text ? (<p className='absolute text-center px-5 rounded-2xl py-2 border bottom-[100px] left-[200px] bg-[#225bec95] text-white'>done</p>):(<p></p>)}
      
      </div>
      </div>
    );
  }
  export default ContactForm;