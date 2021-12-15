import React from 'react'
import FormContact from './Form'
import picture from '../../assets/Contact.PNG'

export default function About() {
    return (
        <div className='grid lg:grid-cols-2 gap-8 mt-2'>
            <div className='sm:ml-16'>
                <img className='' src={picture} alt="About"/>
                <div className='grid lg:grid-cols-2 mt-12'>
                    <div className='text-center sm:text-left'>
                        <h1 className='text-3xl text-blue'>Địa chỉ </h1>
                        <p className='mt-2 mb-4'>105 Tôn Dật Tiên, Phường Tân Phú, <br/> Quận 7, TpHCM, Việt Nam</p>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h1 className='text-3xl text-blue'>Liên lạc</h1>
                        <p className='mt-2 mb-4'>+84-3584-3932</p>
                    </div>
                    <div className='text-center sm:text-left'>
                        <h1 className='text-3xl text-blue'>Email</h1>
                        <p className='mt-2 mb-4'><a href="mailto:MindFulbright@gmail.com">MindFulbright@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className='sm:ml-4 sm:mr-4 lg:mr-12 mb-4 lg:mb-0'>
                <FormContact/>
            </div>

        </div>
    )
}
