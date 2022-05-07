import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const FormContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifyLoading = () => {
        toast('Đang gửi', {
            position: 'bottom-right',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback progressing',
            toastId: 'loadingToast'
        });
    };
    const toastifySuccess = () => {
        localStorage.setItem("mfb_formused", Date.now())
        toast('Đã gửi', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const toastifyError = () => {
        toast('Đã có lỗi xảy ra. Bạn hãy thử liên hệ chúng tôi bằng email nhé!', {
            position: 'bottom-right',
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback fail',
            toastId: 'failToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { name, email, subject, message } = data;
        // console.log(name, email, subject, message);
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            toastifyLoading();
            let last_time = localStorage.getItem("mfb_formused")
            let current_time = Date.now()
            if (current_time - last_time < 2590000) { //less than a month
                throw new Error("Giới hạn 1 lần gửi form 1 người mỗi tháng")
            }
            await emailjs.send(
                "service_ttw58ip",//process.env.REACT_APP_SERVICE_ID,
                "template_700gisd",//process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                "user_8C23bZTY7Iw48i3MBvO8m"//process.env.REACT_APP_USER_ID
            );
            toast.dismiss("loadingToast");
            reset();
            toastifySuccess();
        } catch (e) {
            toast.dismiss("loadingToast");
            toastifyError();
            console.log(e);
        }
    };

    return (
        <div className=''>
            <form className="w-screen sm:w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className='text-3xl text-center text-blue'>{"Liên lạc với MindFulbright"}</h1>
                <div className='grid grid-cols-2 gap-4 mt-10 sm:mt-12 lg:mt-4'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue">
                                {"Họ tên"}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder={"Họ tên"}
                                {...register('name', {
                                    required: { value: true, message: "Bắt buộc" },
                                    maxLength: {
                                        value: 32,
                                        message: "Tối đa 32 kí tự"
                                    }
                                })} />
                            {errors.name && <span className='errorMessage text-red-500'>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue">
                                {"Thư điện tử"}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email" type="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                                placeholder={"example@mail.com"}
                            />
                            {errors.email && (
                                <span className='errorMessage text-red-500'>{"Địa chỉ thư phải hợp lệ"}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue">
                            {"Tiêu đề"}
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type='text'
                            name='subject'
                            {...register('subject', {
                                required: { value: true, message: "Bắt buộc" },
                                maxLength: {
                                    value: 75,
                                    message: "Tối đa 75 kí tự"
                                }
                            })}
                            placeholder={"Tiêu đề"} />
                        {errors.subject && (
                            <span className='errorMessage text-red-500'>{errors.subject.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue">
                            {"Nội dung"}
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none" id="message"
                            rows={3}
                            name='message'
                            {...register('message', {
                                required: true
                            })}
                            placeholder={"Nội dung"}
                        ></textarea>
                        {errors.message && <span className='errorMessage text-red-500'>{"Bắt buộc"}</span>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-full">
                        <button className="shadow background-gold hover:text-yellow-500 font-bold py-4 px-4 rounded w-full" type="submit">
                            Gửi
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormContact;