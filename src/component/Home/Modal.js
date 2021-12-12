import React from 'react'
import { useDispatch } from 'react-redux';


export default function Modal(props) {
    const dispatch = useDispatch();
    //const { feeling, annoy, time, counter } = useSelector(state => state.SeletionReducer);

    return (
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "+(props.isModalOpen ? "" : "hidden")}>
        <div className="relative my-auto mx-auto p-5 border w-1/2 h-half shadow-lg rounded-md bg-white">
            <div className="mt-3 text-left">
                <h1 className="text-3xl text-center">
                    <span className='text-gold'>MindFulbright</span>
                    <span className='text-blue'>.</span>
                    <span className='text-blue'> xin chào, </span>
                </h1>
                <div className="mt-2 px-7 py-3 ml-12 text-center">
                    <p className="text-2xl text-blue">
                        Hôm nay bạn thấy như thế nào?
                    </p>
                    <div className='grid grid-flow-col'>
                        <button onClick={() => dispatch({type: "SELECT_FEELING", value: "vui"})}>Vui</button>
                        <button onClick={() => dispatch({type: "SELECT_FEELING", value: "thuong"})}>Bình thường</button>
                        <button onClick={() => dispatch({type: "SELECT_FEELING", value: "buon"})}>Buồn</button>
                    </div>
                </div>
                <div className="mt-2 px-7 py-3 ml-12 text-center">
                    <p className="text-2xl text-blue">
                        Điều gì đang làm phiền bạn?
                    </p>
                    <div className='grid grid-flow-col'>
                        <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_thu_gian"})}>Khó thư giãn</button>
                        <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_tap_trung"})}>Khó tập trung</button>
                        <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "cang_thang"})}>Căng thẳng</button>
                        <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "lo_lang"})}>Lo lắng</button>
                        <button onClick={() => dispatch({type: "SELECT_ANNOY", value: "kho_ngu"})}>Khó ngủ</button>
                    </div>
                </div>
                <div className="mt-2 px-7 py-3  ml-12 text-center">
                    <p className="text-2xl text-blue">
                        Bạn có thể ở đây với mình bao lâu?
                    </p>
                    <div className='grid grid-flow-col'>
                        <button onClick={() => dispatch({type: "SELECT_TIME", value: "15"})}>15 phút</button>
                        <button onClick={() => dispatch({type: "SELECT_TIME", value: "30"})}>30 phút</button>
                        <button onClick={() => dispatch({type: "SELECT_TIME", value: "60"})}>60 phút</button>
                    </div>
                </div>
                <div className="items-center px-4 py-3">
                    <button onClick={()=>{props.toggleModal(false)}} id="ok-btn" className="block mx-auto px-4 py-2 text-base">
                        <u>Cám ơn Chani nhưng mình muốn tự khám phá MindFulbright</u>
                    </button>
                </div>
            </div>
        </div>
        </div>



    )
}
