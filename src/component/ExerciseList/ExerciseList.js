import React from 'react'
import DATA from '../../data/post.json'

export default function ExerciseList(props) {
    const {cur_category, allow_posts_id} = props
    let max_value;
    if (props.max_value) {
        max_value = props.max_value
    }
    else {
        max_value = 1000;
    }
    console.log(cur_category, allow_posts_id)
    return (
        <div className='grid sm-grid-cols-2 lg:grid-cols-3'>
            {DATA &&
                DATA.filter(ap => { return ((ap.type === cur_category || cur_category === undefined) && (allow_posts_id == undefined || allow_posts_id.includes(ap.id)))}).slice(0,max_value).map((filtered_post, index) => (
                    <article className='px-4 py-4'>
                        <img
                            src={filtered_post.image_url}
                            alt={filtered_post.name}
                            className="w-full h-64 rounded-r object-cover"
                        />
                        <div className='sm:col-span-4 lg:col-span-9'>
                            <h3 className="text-blue text-center text-xl lg:text-2xl font-blog py-2">
                                <b>{filtered_post.name}</b>
                            </h3>
                            <p className='secondary-font text-blue text-left text-xs sm:text-base lg:text-lg font-blog py-2'>{filtered_post.description}...</p>
                        </div>
                        <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block"><b>Xem bài tập</b></button>
                    </article>
                ))}
        </div>
    )
}
