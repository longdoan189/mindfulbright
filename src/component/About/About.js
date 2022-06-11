import React, { useState } from 'react'
import picture from '../../assets/icons/chani calm.svg'


export default function About() {

    const [showThankNote, setShowThankNote] = useState(false);
    return (
        <div className='grid lg:grid-cols-2 gap-2 mt-2'>
            <img className='mx-auto' style={{ "height": "66vh" }} src={picture} alt="About" />
            <div className='sm:ml-8 mt-8'>
                <h1 className='text-3xl sm:text-5xl text-center'>
                    <span className='text-blue'>MindFulbright</span>
                    <span className='text-gold'>.</span>
                </h1>
                <p className='text-base lg:text-lg mt-8 mx-4 sm:ml-4 sm:mr-12 text-justify'>Chúng mình là một nhóm cán bộ, giảng viên, và sinh viên đại học tại Đại học Fulbright Việt Nam. Chúng mình thiết kế MindFulbright với mong muốn đem đến cho bạn một không gian để nghỉ ngơi, thông qua việc thực hành Chánh niệm. </p>
                <p className='text-base lg:text-lg mt-8 mx-4 sm:ml-4 sm:mr-12 text-justify'>Chánh niệm là chú tâm vào ở đây và ngay lúc này. Từ chú tâm, ta có được sự tỉnh thức và hướng tới sự chữa lành.</p>
                <button className="text-sm md:text-lg mt-12 mb-8 text-white bg-red-500 hover:text-yellow-500 px-8 py-3 border rounded-lg mx-auto block" onClick={() => { setShowThankNote(true) }}><b>Quan tâm</b></button>
                {showThankNote &&
                    <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 " + (showThankNote ? "" : "hidden")} >
                        <div className="relative my-auto mx-auto p-5 border sm:w-2/3 h-half shadow-lg rounded-md bg-white z-10">
                            <div className="text-center vertical-centre">
                                <div className='px-7 text-center mt-16'>
                                    <p className={'text-xl mt-8 mx-4 sm:ml-4 sm:mr-12 text-center text-gold '}>Cám ơn bạn đã quan tâm và ủng hộ MindFulbright!</p>
                                    <p className={'text-xl mx-4 sm:ml-4 sm:mr-12 text-center text-gold '}>Tính năng này hiện đang được phát triển</p>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setShowThankNote(false)}}><b>Xong</b></button>
                                </div>
                            </div>
                        </div>
                        <div className='fixed inset-0' onClick={() => { setShowThankNote(false) }}></div>
                    </div>
                }
                <p className={'text-base mx-4 sm:ml-4 sm:mr-12 text-center text-gold invisible'}>MindFulbright sẽ luôn cập nhật thông tin mới nhất đến bạn.</p>

            </div>
        </div>
    )
}
