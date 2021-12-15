import React from 'react'
import picture from '../../assets/MindFulbright.jpg'

export default function About() {
    return (
        <div className='grid lg:grid-cols-2 gap-2 mt-2'>
            <img className='mx-auto' style={{"height": "75vh"}} src={picture} alt="About"/>
            <div className='sm:ml-8 mt-8'>
                <h1 className='text-3xl sm:text-5xl text-blue text-center'>MindFulbright</h1>
                <p className='text-blue text-base lg:text-lg mt-8 mx-4 sm:ml-4 sm:mr-12'>Chúng mình là một nhóm cán bộ, giảng viên, và sinh viên đại học tại Đại học Fulbright Việt Nam. Chúng mình thiết kế MindFulbright với mong muốn đem đến cho bạn một không gian để nghỉ ngơi, thông qua việc thực hành Chánh niệm. </p>
                <button className="text-sm md:text-lg mt-12 mb-8 text-white bg-red-500 hover:text-yellow-500 px-8 py-3 border rounded-lg mx-auto block"><b>Quan tâm</b></button>
            </div>
        </div>
    )
}