import React, { useState } from 'react'
import ExerciseList from '../ExerciseList/ExerciseList';
import './Instruction.css'

export default function Instruction() {
    let optionsState;
    const [cur_category, set_category] = useState("Video");

    return (
        <div className="mx-2 sm:mx-8 lg:mx-12">
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2'>
                {/**
                <select className='border border-gray-500 text-gold px-8 py-2 col-start-8 col-span-1 rounded-lg mr-4 z-10 cursor-pointer' value={optionsState} onChange={(e) => set_category(e.target.value)}>
                    <option value="Video">Video</option>
                    <option value="Podcast">Podcast</option>
                </select>
                */}
                <div>

                </div>
                <div className='grid grid-cols-2 gap-2 col-start-4 mx-4'>
                    <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 w-full py-3 border rounded-lg mx-auto block" onClick={() => {set_category("Video")}}>Video</button>
                    <button className="text-sm md:text-lg mt-5 background-gold hover:text-yellow-500 w-full py-3 border rounded-lg mx-auto block" onClick={() => {set_category("Podcast")}}>Podcast</button>
                </div>
            </div>
            <ExerciseList className="height-80vh" cur_category={cur_category} shall_break={true}/>
            
        </div>

    )
}
