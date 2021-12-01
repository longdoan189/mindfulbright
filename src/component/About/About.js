import React from 'react'
import picture from '../../assets/About.PNG'

export default function About() {
    return (
        <div className='grid lg:grid-cols-2 mt-2'>
            <img className='lg:ml-16' src={picture} alt="About"/>
            <div className='mt-8'>
                <h1 className='text-5xl text-blue text-center'>MindFulbright</h1>
                <p className='text-blue mt-8 ml-4 mr-12'>We are Le Kha, Nguyen Ha An, Nguyen Tri Dung, Do Thi Minh Han, Doan Duc Nguyen Long, undergraduate students at Fulbright University Vietnam. We design this website hoping that it would bring you some peace of mind, through practicing Mindfulness. </p>
                <div className='text-center mt-8 mb-12 lg:mt-20'>
                    <button className="text-sm md:text-lg mt-5 text-white bg-red-500 hover:text-yellow-500 px-8 py-3 border rounded-lg"><b>Care</b></button>
                </div>
            </div>
        </div>
    )
}
