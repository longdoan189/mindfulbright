import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../../data/post.json'

export default function ExerciseList(props) {
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
    const {cur_category, cur_time, allow_posts_num, shall_break, className} = props
    return (
        <div className={ className + ' grid ' + (shall_break ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-flow-col')}>
            {DATA &&
                DATA.filter(ap => { return ((ap.type === cur_category || cur_category === undefined) && (allow_posts_num === undefined || allow_posts_num.includes(ap.num)) && (cur_time === undefined || checkTime(cur_time, ap.duration)) )}).map((filtered_post, index) => (
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
                                <p className='my-auto'>{filtered_post.description.slice(0,250)}...</p>
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
