import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Selected from './Selected'
import happy_icon from '../../assets/icons/chani happy.svg'
//import angry_icon from '../../assets/icons/chani angry.svg'
import anxious_icon from '../../assets/icons/chani anxious.svg'
//import calm_icon from '../../assets/icons/chani calm.svg'
import depress_icon from '../../assets/icons/chani depress.svg'
import fun_icon from '../../assets/icons/chani fun.svg'
import headache_icon from '../../assets/icons/chani headache.svg'
import sad_icon from '../../assets/icons/chani sad.svg'
import sleepy_icon from '../../assets/icons/chani sleepy.svg'
import worry_icon from '../../assets/icons/chani worry.svg'
import time_15 from '../../assets/icons/15 min.svg'
import time_30 from '../../assets/icons/30 min.svg'
import time_60 from '../../assets/icons/45 min.svg'
import './Home.css'


export default function Modal(props) {
    const dispatch = useDispatch();
    const [openWelcome, setOpenWelcome] = useState(true);
    const [openFeeling, setOpenFeeling] = useState(false);
    const [openAnnoy, setOpenAnnoy] = useState(false);
    const [openTime, setOpenTime] = useState(false);
    const [openSelected, setOpenSelected] = useState(false);

    const changeFeelingAnnoy = (status) => {
        setOpenFeeling(false); 
        setOpenAnnoy(true);
        dispatch({type: "SELECT_FEELING", value: status});
    }

    const changeAnnoyTime = (status) => {
        setOpenAnnoy(false);
        setOpenTime(true);
        dispatch({type: "SELECT_ANNOY", value: status})
    }
    const changeTime = (status) => {
        setOpenTime(false);
        setOpenSelected(true);
        dispatch({type: "SELECT_TIME", value: status});
    }
    
    const resetOpen = () => {
        setOpenWelcome(true);
        setOpenFeeling(false);
        setOpenAnnoy(false);
        setOpenTime(false);
        setOpenSelected(false);
        props.toggleModal(false);
        dispatch({type: "RESET_SELECTION"})
    }
    const { feeling, annoy, time } = useSelector(state => state.SeletionReducer);

    return (
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 "+(props.isModalOpen ? "" : "hidden")}>
            <div className="relative my-auto mx-auto p-5 border sm:w-2/3 h-half shadow-lg rounded-md bg-white z-10 w-full">
                <div className="text-center vertical-centre">
                    { openWelcome &&
                    <div className='px-7 text-center sm:mt-24 lg:mt-32'>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl text-center">
                            <span className='text-gold'>MindFulbright</span>
                            <span className='text-blue'>.</span>
                            <span className='text-blue'> xin chào, </span>
                        </h1>
                        <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full mx-auto block" onClick={() => {setOpenWelcome(false); setOpenFeeling(true)}}><b>Tiếp tục</b></button>
                    </div>
                    }
                    { openFeeling &&
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            Hôm nay bạn thấy như thế nào?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeFeelingAnnoy("vui")} className={'' + (feeling==="vui" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={happy_icon} className='h-full mx-auto' alt="Vui"/>
                                <p>Vui</p>
                            </button>
                            <button onClick={() => changeFeelingAnnoy("thuong")} className={'' + (feeling==="thuong" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={fun_icon} className='h-full mx-auto' alt="Bình thường"/>
                                <p>Bình thường</p>
                            </button>
                            <button onClick={() => changeFeelingAnnoy("buon")} className={'' + (feeling==="buon" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={sad_icon} className='h-full mx-auto' alt="Buồn"/>
                                <p>Buồn</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenFeeling(false); setOpenWelcome(true);}}><b>Quay lại</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>Bỏ qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                    { openAnnoy &&
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            Điều gì đang làm phiền bạn?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeAnnoyTime("kho_thu_gian")} className={'' + (annoy==="kho_thu_gian" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={headache_icon} className='h-full mx-auto' alt="Khó thư giãn"/>
                                <p>Khó thư giãn</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("cang_thang")} className={'' + (annoy==="cang_thang" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={depress_icon} className='h-full mx-auto' alt="Căng thẳng"/>
                                <p>Căng thẳng</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("lo_lang")} className={'' + (annoy==="lo_lang" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={worry_icon} className='h-full mx-auto' alt="Lo lắng"/>
                                <p>Lo lắng</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("kho_ngu")} className={'' + (annoy==="kho_ngu" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={sleepy_icon} className='h-full mx-auto' alt="Khó ngủ"/>
                                <p>Khó ngủ</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("kho_tap_trung")} className={'' + (annoy==="kho_tap_trung" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={anxious_icon} className='h-full mx-auto' alt="Khó tập trung"/>
                                <p>Khó tập trung</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenAnnoy(false); setOpenFeeling(true);}}><b>Quay lại</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>Bỏ qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                    { openTime &&
                    <div className="mt-2 px-7 py-3  text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            Bạn có thể ở đây với mình bao lâu?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeTime("15")} className={'' + (time==="15" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_15} className='h-full mx-auto' alt="15"/>
                                <p>15 phút</p>
                            </button>
                            <button onClick={() => changeTime("30")} className={'' + (time==="30" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_30} className='h-full mx-auto' alt="30"/>
                                <p>30 phút</p>
                            </button>
                            <button onClick={() => changeTime("60")} className={'' + (time==="60" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_60} className='h-full mx-auto' alt="60"/>
                                <p>60 phút</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenTime(false); setOpenAnnoy(true);}}><b>Quay lại</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>Bỏ qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            { openSelected &&
                    <div className="relative my-auto mx-auto shadow-lg rounded-md bg-white z-10 py-8  text-center">
                        <div className='text-xl sm:text-2xl lg:text-5xl text-center mr-4'>
                            <div className='inline-block'>
                                <span className='text-gold'>Hôm nay</span>
                                <span className='text-blue'>, bạn có thể thử</span>
                            </div>
                        </div>
                        <div className=' mt-3' style={{height: '80%'}}>
                            <Selected/>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenSelected(false); setOpenTime(true);}}><b>Quay lại</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>Xong</b></button>
                            </div>
                        </div>
                    </div>
                }
            <div className='fixed inset-0' onClick={()=>{resetOpen()}}></div>
        </div>



    )
}
