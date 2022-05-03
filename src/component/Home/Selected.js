import React from 'react'
import { useSelector } from 'react-redux';
import ExerciseList from '../ExerciseList/ExerciseList'

export default function Selected() {
    const { annoy, time } = useSelector(state => state.SeletionReducer);
    let allow_posts_num = []
    if (annoy === 'kho_thu_gian') {
        allow_posts_num.push(1);
        if (time === '15') {
            allow_posts_num.push(0);
            allow_posts_num.push(3);
        }
    }
    else if (annoy === 'kho_tap_trung') {
        allow_posts_num.push(4);
        if (time === '15' || time === '30') {
            allow_posts_num.push(2);
        }
    }
    else if (annoy === 'cang_thang' || annoy === 'kho_ngu') {
        allow_posts_num.push(1);
        allow_posts_num.push(4);
        if (time === '15') {
            allow_posts_num.push(0);
            allow_posts_num.push(2);
            allow_posts_num.push(3);
        }
        else if (time === '30') {
            allow_posts_num.push(2);
        }
    }

    else if (annoy === 'lo_lang') {
        allow_posts_num.push(1);
        allow_posts_num.push(4);
    }
    return (
        <div>
            <ExerciseList allow_posts_num={allow_posts_num} shall_break={true} />
        </div>
    )
}
