import React from 'react'
import { NavLink } from 'react-router-dom'
import DATA from '../../data/post.json'

export default function ExerciseList(props) {
    const {cur_category, allow_posts_num, shall_break, className} = props
    return (
        <div className={ className + ' grid ' + (shall_break ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-flow-col')}>
            {DATA &&
                DATA.filter(ap => { return ((ap.type === cur_category || cur_category === undefined) && (allow_posts_num === undefined || allow_posts_num.includes(ap.num)))}).map((filtered_post, index) => (
                    <article className='px-4 py-4' key={filtered_post.name}>
                        <img
                            src={filtered_post.image_url}
                            alt={filtered_post.name}
                            className="w-full h-64 rounded-r object-cover"
                        />
                        <div className='sm:col-span-4 lg:col-span-9'>
                            <h3 className="text-blue text-center text-xl lg:text-2xl font-blog py-2">
                                <b>{filtered_post.name}</b>
                            </h3>
                            <div className='flex secondary-font text-left text-xs sm:text-base lg:text-lg font-blog py-2 h-32 lg:h-64 xl:h-48 '>
                                <p className='my-auto'>{filtered_post.description.slice(0,250)}</p>
                            </div>
                        </div>
                        <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block">
                            <NavLink to={`/instruction/${filtered_post.id}`}>
                                <b>Xem bài tập</b>
                            </NavLink>
                        </button>
                    </article>
                ))}
        </div>
    )
}
