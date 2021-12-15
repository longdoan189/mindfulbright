import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ExerciseList from '../ExerciseList/ExerciseList'

export default function Selected(props) {
    const dispatch = useDispatch();
    const { annoy, time } = useSelector(state => state.SeletionReducer);
    const { isOpen, toggleOpen } = props;
    let allow_posts_id = []
    if (annoy === 'kho_thu_gian') {
        allow_posts_id.push(1);
        if (time === '15') {
            allow_posts_id.push(0);
            allow_posts_id.push(3);
        }
    }
    else if (annoy === 'kho_tap_trung') {
        allow_posts_id.push(4);
        allow_posts_id.push(5);
        if (time === '15' || time === '30') {
            allow_posts_id.push(2);
        }
    }
    else if (annoy === 'cang_thang' || annoy === 'kho_ngu') {
        allow_posts_id.push(1);
        allow_posts_id.push(4);
        allow_posts_id.push(5);
        if (time === '15') {
            allow_posts_id.push(0);
            allow_posts_id.push(2);
            allow_posts_id.push(3);
        }
        else if (time === '30') {
            allow_posts_id.push(2);
        }
    }

    else if (annoy === 'lo_lang') {
        allow_posts_id.push(1);
        allow_posts_id.push(4);
        allow_posts_id.push(5);
    }
    console.log(allow_posts_id)
    return (
        <div className={"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto " + (isOpen ? "" : "hidden")}>
            <div className="relative my-auto mx-auto p-5 border w-7/8 h-screen shadow-lg rounded-md bg-white">
                <p className='text-xl sm:text-3xl lg:text-5xl text-right mr-4'>
                    <div className='mr-32 inline-block'>
                        <span className='text-gold'>Hôm nay</span>
                        <span className='text-blue'>, bạn có thể thử</span>
                    </div>
                    <div className="modal-close cursor-pointer inline-block ml-64 mr-4" onClick={() => {toggleOpen(false); dispatch({type: "RESET_SELECTION"})}}>
                        <svg className="fill-current text-gold border" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                        </svg>
                    </div>
                </p>
                <div className='mt-12 overflow-y-scroll' style={{height: '80%'}}>
                    <ExerciseList allow_posts_id={allow_posts_id} shall_break={true} />
                </div>
            </div>
        </div>
    )
}
