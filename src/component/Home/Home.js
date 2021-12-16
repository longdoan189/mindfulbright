import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Modal from './Modal'
import picture from '../../assets/icons/chani calm.svg'
import Selected from './Selected'
import './Home.css'

export default function Home() {
    const { counter } = useSelector(state => state.SeletionReducer);
    const [openModal, setOpenModal] = useState(false);
    const [openSelected, setOpenSelected] = useState(false);

    useEffect(() => {
        console.log(counter, '- Has changed')
        if (counter === 3) {
            setOpenModal(false);
            setOpenSelected(true);
        }
    },[counter])
    return (
        <div>
            <div className='grid sm:grid-cols-2'>
                <div className='ml-2 sm:ml-24 lg:ml-40 lg:mt-20'>
                    <h1 className='text-blue text-center sm:text-left text-3xl lg:text-5xl font-bold'>Stay Healthy & <br/> Be Present</h1>
                    <p className='mt-8 text-black text-left text-lg'>MindFulbright là một không gian để chữa lành và thư giãn, thông qua việc thực hành Chánh niệm. Với những video và podcast hướng dẫn, bé Chani sẽ cùng bạn lần lượt đi qua các bài tập giúp cải thiện sức khoẻ tinh thần của bạn. </p>
                    <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block" onClick={() => {setOpenModal(true)}}><b>Tìm hiểu thêm</b></button>
                </div>
                <div className='ml-16 lg:ml-32 mr-12 mt-12'>
                    <img src={picture} alt="MindFulbright" className='pic-size'/>
                </div>
            </div>
            <Selected isOpen={openSelected} toggleOpen={setOpenSelected}/>
            
            <Modal isModalOpen={openModal} toggleModal={setOpenModal}/>
        </div>
    )
}
