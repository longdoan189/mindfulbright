import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "+(props.isModalOpen ? "" : "hidden")}>
        <div className="relative my-auto mx-auto p-5 border w-1/2 h-half shadow-lg rounded-md bg-white">
            <div className="mt-3 text-left">
                <h1 className="text-3xl">
                    <span className='text-blue'>Welcome to </span>
                    <span className='text-gold'>MindFulbright</span>
                    <span className='text-blue'>.</span>
                </h1>
                <div className="mt-2 px-7 py-3">
                    <p className="text-sm text-gray-500">
                        ...
                    </p>
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
