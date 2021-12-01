import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useTranslation } from 'react-i18next';

const FormContact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { t, i18n } = useTranslation();

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifyLoading = () => {
        toast(t('sending'), {
            position: 'bottom-left',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback progressing',
            toastId: 'loadingToast'
        });
    };
    const toastifySuccess = () => {
        toast(t('sent'), {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
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
            await emailjs.send(
                "service_wh8j69l000000",//process.env.REACT_APP_SERVICE_ID,
                "template_5thhm1800000",//process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                "user_8BiBJHhPNSfDD9EGOdnpj00000"//process.env.REACT_APP_USER_ID
            );
            toast.dismiss("loadingToast");
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className=''>
            <form className="w-screen sm:w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className='text-3xl text-center'>{t("contact_us_here")}</h1>
                <div className='grid grid-cols-2 gap-4 mt-10 sm:mt-12 lg:mt-0'>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                {t('full_name')}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder={t('full_name')}
                                {...register('name', {
                                    required: { value: true, message: t('required') },
                                    maxLength: {
                                        value: 32,
                                        message: t('full_name_Max')
                                    }
                                })} />
                            {errors.name && <span className='errorMessage text-red-500'>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                {t('email_address')}
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email" type="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                                placeholder={t('email_address')}
                            />
                            {errors.email && (
                                <span className='errorMessage text-red-500'>{t('valid_email')}</span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            {t('title')}
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type='text'
                            name='subject'
                            {...register('subject', {
                                required: { value: true, message: t('required') },
                                maxLength: {
                                    value: 75,
                                    message: t("lt75c")
                                }
                            })}
                            placeholder={t('subject')} />
                        {errors.subject && (
                            <span className='errorMessage text-red-500'>{errors.subject.message}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            {t('message')}
                        </label>
                        <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"
                            rows={3}
                            name='message'
                            {...register('message', {
                                required: true
                            })}
                            placeholder={t('message')}
                        ></textarea>
                        {errors.message && <span className='errorMessage text-red-500'>{t("required")}</span>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-full">
                        <button className="shadow bg-red-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-full" type="submit">
                            Send
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormContact;