import React from 'react'

const Members = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[70%] lg:flex flex justify-center lg:justify-center p-8 flex-col lg:flex-row'>
            <div className=' w-[200px] h-[220px] lg:w-[200px] lg:w-[220px] bg-adastra-dark-blue border-[2px] border-adastra-light-blue rounded-[50%] mx-auto'></div>
            <div className='lg:w-[50rem] w-[100%] p-8 m-4 text-center'>
                <h1 className='text-[1.75rem]'>Raj Padval</h1>
                <h2 className='text-[0.85rem]'>Technical Member</h2>
                <span>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"</span>
            </div>
        </div>
    </div>
  )
}

export default Members