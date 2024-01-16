import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-center text-[2rem] m-5'>Subscribe To Our Newsletter</h2>
        <div className='flex justify-center'>
        <form className=''>
          <input type='email' placeholder='Enter Your Email.....' className='bg-[#ffffff00] border-[0.15rem] border-adastra-light-blue w-[60vw] sm:w-[40vw] text-[2rem] p-[8px]'/>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter