import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-blue w-[100vw] h-[20vh] fixed bottom-0 bg-adastra-dark-blue'>
            <div className='flex justify-evenly flex-col sm:flex-row gap-y-6 text-center'>
                <h1 className='sm:my-auto sm:mx-auto m-8 font-Logo' id='Footer-Text-Logo'>AdAstra
                    <div class="roller">
                        <span id="rolltext">To the Stars ✨<br />
                            Through<br />
                            Hardship 🚀<br />
                            😊😊😊
                        </span>
                    </div>
                </h1>
                <div className='m-auto'>
                    <h2 className='sm:text-xl text-[1.5rem]'>Social Media</h2>
                    <div className='list-none text-[0.95rem]'>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                    </div>
                </div>
                <div className='m-auto'>
                    <h2 className='sm:text-xl text-[1.5rem]'>Learn</h2>
                    <div className='list-none text-[0.95rem]'>
                        <li>Coding</li>
                        <li>Development</li>
                        <li>Extra Curricular</li>
                        <li>Sports</li>
                    </div>
                </div>
                <div className='m-auto'>
                    <h2 className='sm:text-xl text-[1.5rem]'>About Us</h2>
                    <div className='list-none text-[0.95rem]'>
                        <li>Core Team</li>
                        <li>Members</li>
                        <li>College</li>
                        <li>Domain</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer