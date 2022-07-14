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
                <button className="text-sm md:text-lg mt-12 mb-8 text-white bg-red-500 hover:text-yellow-500 px-8 py-3 border rounded-lg mx-auto block" onClick={() => { setShowThankNote(true) }}><b>Đóng góp</b></button>
                {showThankNote &&
                    <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10 " + (showThankNote ? "" : "hidden")} >
                        <div className="relative my-auto mx-auto p-5 border sm:w-2/3 sm:h-half shadow-lg rounded-md bg-white z-10 vertical-centre">
                            <div className="text-center">
                                <div className='px-7 text-center mt-8'>
                                    <p className={'lg:text-xl mt-8 mx-4 sm:ml-4 sm:mr-12 text-center text-gold '}>Cám ơn bạn đã quan tâm và ủng hộ MindFulbright, bạn có thể đóng góp cho MindFulbright bằng những hình thức sau</p>
                                    <div className='grid grid-cols-2 my-8 lg:mx-8'>
                                        <div className='text-blue m-2'>
                                            <h1 className='lg:text-lg'> 1. Chuyển khoản ngân hàng </h1>
                                            <p className='p-2 text-xs lg:text-base'> Ngân hàng: Vietcombank </p>
                                            <p className='p-2 text-xs lg:text-base'> Số tài khoản: 007 100 113 9297 </p>
                                            <p className='p-2 text-xs lg:text-base'> Chủ tài khoản: Nguyễn Xuân Toàn</p>
                                            <p className='p-2 text-xs lg:text-base'> Chi nhánh: Hội sở chính </p>
                                            <h1 className='p-2 lg:text-lg'> 2. Zalopay/ Momo: 093 172 4995</h1>
                                            <p className='p-2 text-xs lg:text-base'>(tài khoản: Nguyễn Xuân Toàn)</p>
                                        </div>
                                        <div className='text-blue m-2 text-center'>
                                            <p className='p-2 text-xs lg:text-base'>Quét nhanh (cho Momo)</p>
                                            <img className='h-24 w-24 sm:h-48 sm:w-48 mx-auto' src={"https://drive.google.com/uc?export=view&id=1Msz9woeaSEzUO5CeL_UkeH2btgiHblAC"} alt="0931724995" />
                                            <p className='p-2 text-xs lg:text-base'>Link Momo: <a href="https://me.momo.vn/pwIlu2UGT3FgtjfeuGuA" className='text-gold'>093 172 4995</a></p>
                                        </div>
                                    </div>
                                    <p className={'text-xs lg:text-lg mt-8 mx-4 sm:ml-4 sm:mr-12 text-center text-gold '}>Số tiền bạn đóng góp sẽ được dùng để duy trì tên miền, nâng cấp tính năng, cũng như cho ra thêm nhiều sản phẩm mới</p>
                                </div>
                                <div className='flex justify-center'>
                                    <button className="text-sm md:text-lg mt-5 btn-blue px-8 py-3 border rounded-full block" onClick={() => { setShowThankNote(false) }}><b>Xong</b></button>
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
