import React, { useState } from 'react'
import Modal from './Modal'
import picture from '../../assets/icons/chani calm.svg'
import './Home.css'

export default function Home() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className='grid sm:grid-cols-2'>
                <div className='ml-2 sm:ml-24 lg:ml-40 lg:mt-20'>
                    <h1 className='text-blue text-center text-3xl lg:text-5xl font-bold'>An&nbsp;trú trong hiện&nbsp;tại</h1>
                    <p className='mt-8 text-black text-justify text-lg'>MindFulbright là một không gian để chữa lành và thư giãn, thông qua việc thực hành Chánh niệm. Với những video và podcast hướng dẫn, bé Chani sẽ cùng bạn lần lượt đi qua các bài tập giúp cải thiện sức khoẻ tinh thần của bạn. </p>
                    <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block" onClick={() => {setOpenModal(true)}}><b>Chọn bài thực hành phù hợp</b></button>
                </div>
                <div className='ml-16 lg:ml-32 mr-12 mt-12'>
                    <img src={picture} alt="MindFulbright" className='pic-size'/>
                </div>
            </div>
          
            <Modal isModalOpen={openModal} toggleModal={setOpenModal}/>
        </div>
    )
}
