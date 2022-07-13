import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../../data/post.json'

export default function ExerciseList(props) {
    //2 check function, convert filter to value to single digits for including check
    const checkTime = (option, list_time) => {
        let the_time = '0'
        if (option === '15') {
            the_time = '1'
        }
        else if (option === '30') {
            the_time = '3'
        }
        else if (option === '45') {
            the_time = '4'
        }
        else if (option === '60') {
            the_time = '6'
        }
        return list_time.includes(the_time)
    }

    const checkAnnoy = (option, list_annoy) => {
        let the_feeling = '0'
        if (option === 'kho_thu_gian') {
            the_feeling = '1'
        }
        else if (option === 'cang_thang') {
            the_feeling = '2'
        }
        else if (option === 'lo_lang') {
            the_feeling = '3'
        }
        else if (option === 'kho_ngu') {
            the_feeling = '4'
        }
        else if (option === 'kho_tap_trung') {
            the_feeling = '5'
        }
        return true //list_annoy.includes(the_feeling) //activate when value added
    }

    const {cur_category, cur_time, cur_annoy, allow_posts_num, shall_break, className} = props
    return (
        <div className={ className + ' grid ' + (shall_break ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-flow-col')}>
            {DATA &&
                DATA.filter(ap => { return ((ap.type === cur_category || cur_category === undefined) && (allow_posts_num === undefined || allow_posts_num.includes(ap.num)) && (cur_time === undefined || checkTime(cur_time, ap.duration)) && (cur_annoy === undefined || checkAnnoy(cur_annoy, ap.feeling)) )}).map((filtered_post, index) => (
                    <article className='px-4 py-4' key={filtered_post.name}>
                        <img
                            src={filtered_post.image_url}
                            alt={filtered_post.name}
                            className="w-full h-64 rounded-r object-cover"
                        />
                        <div className='sm:col-span-4 lg:col-span-9'>
                            <h3 className="text-blue text-center text-base lg:text-xl xl:text-2xl font-blog py-2">
                                <b>{filtered_post.name}</b>
                            </h3>
                            <div className='flex secondary-font text-center text-xs lg:text-base xl:text-lg font-blog py-2 h-32 lg:h-64 xl:h-48 '>
                                <p className='my-auto'>
                                    <span>{filtered_post.description.slice(0,250)}</span>
                                    {filtered_post.description.length > 250 ? <span>...</span> : <span></span>}
                                </p>
                            </div>
                        </div>
                        
                        <NavLink to={`/instruction/${filtered_post.id}`}>
                            <button className="text-sm md:text-lg mt-4 sm:mt-8 lg:mt-12 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block">
                                <b>Xem bài tập</b>
                            </button>
                        </NavLink>
                    </article>
                ))}
        </div>
    )
}
