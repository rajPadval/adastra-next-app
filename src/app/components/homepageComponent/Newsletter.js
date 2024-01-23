import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex justify-center mb-48 mt-16'>
      <div className='flex flex-col justify-center'>
        <h2 className='text-center sm:text-[2rem] text-[1.25rem] m-5'>Subscribe To Our Newsletter</h2>
        <div className='flex justify-center'>
          <form className=''>
            <input type='email' placeholder='' className='bg-[#ffffff00] border-[0.15rem] border-adastra-light-blue w-[60vw] sm:w-[40vw] sm:text-[2rem] text-[1.05rem] p-[8px] outline-none' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter