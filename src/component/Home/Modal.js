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
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-10 overflow-y-auto " +( (props.isModalOpen) ? "" : "hidden")}>
            <div className="relative my-auto mx-auto p-5 border sm:w-2/3 h-half shadow-lg rounded-md bg-white z-10 w-full">
                <div className="text-center vertical-centre">
                    { openWelcome &&
                    <div className='px-7 text-center sm:mt-24 lg:mt-32'>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl text-center">
                            <span className='text-gold'>MindFulbright</span>
                            <span className='text-blue'>.</span>
                            <span className='text-blue'> xin ch??o, </span>
                        </h1>
                        <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full mx-auto block" onClick={() => {setOpenWelcome(false); setOpenFeeling(true)}}><b>Ti???p t???c</b></button>
                    </div>
                    }
                    { openFeeling &&
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            H??m nay b???n th???y nh?? th??? n??o?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeFeelingAnnoy("vui")} className={'' + (feeling==="vui" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={happy_icon} className='h-full mx-auto' alt="Vui"/>
                                <p>Vui</p>
                            </button>
                            <button onClick={() => changeFeelingAnnoy("thuong")} className={'' + (feeling==="thuong" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={fun_icon} className='h-full mx-auto' alt="B??nh th?????ng"/>
                                <p>B??nh th?????ng</p>
                            </button>
                            <button onClick={() => changeFeelingAnnoy("buon")} className={'' + (feeling==="buon" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={sad_icon} className='h-full mx-auto' alt="Bu???n"/>
                                <p>Bu???n</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenFeeling(false); setOpenWelcome(true);}}><b>Quay l???i</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>B??? qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                    { openAnnoy &&
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            ??i???u g?? ??ang l??m phi???n b???n?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeAnnoyTime("kho_thu_gian")} className={'' + (annoy==="kho_thu_gian" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={headache_icon} className='h-full mx-auto' alt="Kh?? th?? gi??n"/>
                                <p>Kh?? th?? gi??n</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("cang_thang")} className={'' + (annoy==="cang_thang" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={depress_icon} className='h-full mx-auto' alt="C??ng th???ng"/>
                                <p>C??ng th???ng</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("lo_lang")} className={'' + (annoy==="lo_lang" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={worry_icon} className='h-full mx-auto' alt="Lo l???ng"/>
                                <p>Lo l???ng</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("kho_ngu")} className={'' + (annoy==="kho_ngu" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={sleepy_icon} className='h-full mx-auto' alt="Kh?? ng???"/>
                                <p>Kh?? ng???</p>
                            </button>
                            <button onClick={() => changeAnnoyTime("kho_tap_trung")} className={'' + (annoy==="kho_tap_trung" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={anxious_icon} className='h-full mx-auto' alt="Kh?? t???p trung"/>
                                <p>Kh?? t???p trung</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenAnnoy(false); setOpenFeeling(true);}}><b>Quay l???i</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>B??? qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                    { openTime &&
                    <div className="mt-2 px-7 py-3  text-center">
                        <p className="text-base sm:text-2xl text-blue mb-2">
                            B???n c?? th??? ??? ????y v???i m??nh bao l??u?
                        </p>
                        <div className='grid grid-flow-col h-32 items-center mt-2 my-6 sm:my-16'>
                            <button onClick={() => changeTime("15")} className={'' + (time==="15" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_15} className='h-full mx-auto' alt="15"/>
                                <p>15 ph??t</p>
                            </button>
                            <button onClick={() => changeTime("30")} className={'' + (time==="30" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_30} className='h-full mx-auto' alt="30"/>
                                <p>30 ph??t</p>
                            </button>
                            <button onClick={() => changeTime("60")} className={'' + (time==="60" ? 'h-24' : 'transform hover:scale-150 h-16')}>
                                <img src={time_60} className='h-full mx-auto' alt="60"/>
                                <p>60 ph??t</p>
                            </button>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenTime(false); setOpenAnnoy(true);}}><b>Quay l???i</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>B??? qua</b></button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
            { openSelected &&
                <div className="relative my-auto mx-auto shadow-lg rounded-md bg-white z-10 py-8 text-center">
                        <div className='text-xl sm:text-2xl lg:text-5xl text-center mr-4'>
                            <div className='inline-block'>
                                <span className='text-gold'>H??m nay</span>
                                <span className='text-blue'>, b???n c?? th??? th???</span>
                            </div>
                        </div>
                        <div className=' mt-3' style={{height: '80%'}}>
                            <Selected/>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='sm:ml-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => {setOpenSelected(false); setOpenTime(true);}}><b>Quay l???i</b></button>
                            </div>
                            <div className='flex justify-end sm:mr-16'>
                                <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={resetOpen}><b>Xong</b></button>
                            </div>
                        </div>
                </div>
            } 
            {(!openSelected ?
                <div className='fixed inset-0' onClick={()=>{
                    resetOpen()
                }}></div> :
                <div></div>
            )}
        </div>



    )
}
