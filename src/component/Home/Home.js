import React from 'react'
import picture from '../../assets/Home.PNG'

export default function Home() {
    return (
        <div className='grid sm:grid-cols-2'>
            <div className='ml-32 my-20'>
                <h1 className='text-blue text-left text-5xl font-bold'>Stay Healthy & <br/> Be Present</h1>
                <p className='text-black text-left text-base font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg "><b>Learn more</b></button>
            </div>
            <div className='m-auto'>
                <img src={picture} alt="MindFulbright"/>
            </div>
        </div>
    )
}
