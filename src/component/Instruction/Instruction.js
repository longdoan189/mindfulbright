import React, { useState } from 'react'
import ExerciseList from '../ExerciseList/ExerciseList';
import './Instruction.css'

export default function Instruction() {
    let optionsState;
    const [cur_category, set_category] = useState("Podcast");

    return (
        <div className="mx-2 sm:mx-8 lg:mx-12 my-4">
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
                <select className='border border-grey text-gold px-8 py-2 lg:col-start-6 col-span-1 rounded-lg mr-4' value={optionsState} onChange={(e) => set_category(e.target.value)}>
                    <option value="Podcast">Podcast</option>
                    <option value="Video">Video</option>
                </select>
            </div>
            <ExerciseList cur_category={cur_category} shall_break={true}/>
            
        </div>

    )
}
