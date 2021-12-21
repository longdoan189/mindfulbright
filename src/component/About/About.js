import React, {useState} from 'react'
import picture from '../../assets/icons/chani calm.svg'


export default function About() {

    const [showThankNote, setShowThankNote] = useState(false)
    return (
        <div className='grid lg:grid-cols-2 gap-2 mt-2'>
            <img className='mx-auto' style={{"height": "66vh"}} src={picture} alt="About"/>
            <div className='sm:ml-8 mt-8'>
                <h1 className='text-3xl sm:text-5xl text-center'>
                    <span className='text-blue'>MindFulbright</span>
                    <span className='text-gold'>.</span>
                </h1>
                <p className='text-base lg:text-lg mt-8 mx-4 sm:ml-4 sm:mr-12'>Chúng mình là một nhóm cán bộ, giảng viên, và sinh viên đại học tại Đại học Fulbright Việt Nam. Chúng mình thiết kế MindFulbright với mong muốn đem đến cho bạn một không gian để nghỉ ngơi, thông qua việc thực hành Chánh niệm. </p>
                <button className="text-sm md:text-lg mt-12 mb-8 text-white bg-red-500 hover:text-yellow-500 px-8 py-3 border rounded-lg mx-auto block" onClick={() => {setShowThankNote(true)}}><b>Quan tâm</b></button>
                <p className={'text-base mt-8 mx-4 sm:ml-4 sm:mr-12 text-center text-gold ' + (showThankNote ? 'visible' : 'invisible')}>Cám ơn bạn đã quan tâm và ủng hộ MindFulbright!</p>
                <p className={'text-base mx-4 sm:ml-4 sm:mr-12 text-center text-gold ' + (showThankNote ? 'visible' : 'invisible')}>MindFulbright sẽ luôn cập nhật thông tin mới nhất đến bạn.</p>

            </div>
        </div>
    )
}
