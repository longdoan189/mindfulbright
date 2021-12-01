import React from 'react'
import FormContact from './Form'
import picture from '../../assets/Contact.PNG'

export default function About() {
    return (
        <div className='grid lg:grid-cols-2 gap-8 mt-2'>
            <div className='ml-4 sm:ml-16'>
                <img className='' src={picture} alt="About"/>
                <div className='grid lg:grid-cols-2 mt-12'>
                    <div>
                        <h1 className='text-3xl text-blue'>Address</h1>
                        <p className='mt-2 mb-4'>105 Ton Dat Tien, Tan Phu Ward, Q.7, HCMC, Vietnam</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-blue'>Call us</h1>
                        <p className='mt-2 mb-4'>01234567890</p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-blue'>Email</h1>
                        <p className='mt-2 mb-4'>phuongmai@example.com</p>
                    </div>
                </div>
            </div>
            <div className='ml-4 mr-4 lg:mr-12'>
                <FormContact/>
            </div>

        </div>
    )
}
