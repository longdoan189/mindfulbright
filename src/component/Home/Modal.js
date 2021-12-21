import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
    const { feeling, annoy, time } = useSelector(state => state.SeletionReducer);

    return (
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "+(props.isModalOpen ? "" : "hidden")}>
            <div className="relative my-auto mx-auto p-5 border sm:w-2/3 h-half shadow-lg rounded-md bg-white z-10">
                <div className="mt-3 text-left">
                    <h1 className="text-3xl text-center">
                        <span className='text-gold'>MindFulbright</span>
                        <span className='text-blue'>.</span>
                        <span className='text-blue'> xin chào, </span>
                    </h1>
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-2xl text-blue mb-2">
                            Hôm nay bạn thấy như thế nào?
                        </p>
                        <div className='grid grid-flow-col h-24'>
                            <button onClick={() => dispatch({type: "SELECT_FEELING", value: "vui"})} className={'' + (feeling==="vui" ? 'h-24' : 'h-16')}>
                                <img src={happy_icon} className='h-full mx-auto' alt="Vui"/>
                                <p>Vui</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_FEELING", value: "thuong"})} className={'' + (feeling==="thuong" ? 'h-24' : 'h-16')}>
                                <img src={fun_icon} className='h-full mx-auto' alt="Bình thường"/>
                                <p>Bình thường</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_FEELING", value: "buon"})} className={'' + (feeling==="buon" ? 'h-24' : 'h-16')}>
                                <img src={sad_icon} className='h-full mx-auto' alt="Buồn"/>
                                <p>Buồn</p>
                            </button>
                        </div>
                    </div>
                    <div className="mt-2 px-7 py-3 text-center">
                        <p className="text-2xl text-blue mb-2">
                            Điều gì đang làm phiền bạn?
                        </p>
                        <div className='grid grid-flow-col h-32 sm:h-24'>
                            <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_thu_gian"})} className={'' + (annoy==="kho_thu_gian" ? 'h-24' : 'h-16')}>
                                <img src={headache_icon} className='h-full mx-auto' alt="Khó thư giãn"/>
                                <p>Khó thư giãn</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "cang_thang"})} className={'' + (annoy==="cang_thang" ? 'h-24' : 'h-16')}>
                                <img src={depress_icon} className='h-full mx-auto' alt="Căng thẳng"/>
                                <p>Căng thẳng</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "lo_lang"})} className={'' + (annoy==="lo_lang" ? 'h-24' : 'h-16')}>
                                <img src={worry_icon} className='h-full mx-auto' alt="Lo lắng"/>
                                <p>Lo lắng</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_ngu"})} className={'' + (annoy==="kho_ngu" ? 'h-24' : 'h-16')}>
                                <img src={sleepy_icon} className='h-full mx-auto' alt="Khó ngủ"/>
                                <p>Khó ngủ</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_tap_trung"})} className={'' + (annoy==="kho_tap_trung" ? 'h-24' : 'h-16')}>
                                <img src={anxious_icon} className='h-full mx-auto' alt="Khó tập trung"/>
                                <p>Khó tập trung</p>
                            </button>
                        </div>
                    </div>
                    <div className="mt-2 px-7 py-3  text-center">
                        <p className="text-2xl text-blue mb-2">
                            Bạn có thể ở đây với mình bao lâu?
                        </p>
                        <div className='grid grid-flow-col h-24'>
                            <button onClick={() => dispatch({type: "SELECT_TIME", value: "15"})} className={'' + (time==="15" ? 'h-24' : 'h-16')}>
                                <img src={time_15} className='h-full mx-auto' alt="15"/>
                                <p>15 phút</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_TIME", value: "30"})} className={'' + (time==="30" ? 'h-24' : 'h-16')}>
                                <img src={time_30} className='h-full mx-auto' alt="30"/>
                                <p>30 phút</p>
                            </button>
                            <button onClick={() => dispatch({type: "SELECT_TIME", value: "60"})} className={'' + (time==="60" ? 'h-24' : 'h-16')}>
                                <img src={time_60} className='h-full mx-auto' alt="60"/>
                                <p>60 phút</p>
                            </button>
                        </div>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button onClick={()=>{props.toggleModal(false)}} id="ok-btn" className="block mx-auto px-4 py-2 text-base">
                            <u>Cám ơn Chani nhưng mình muốn tự khám phá MindFulbright</u>
                        </button>
                    </div>
                </div>
            </div>
            <div className='fixed inset-0' onClick={()=>{props.toggleModal(false)}}></div>
        </div>



    )
}
