import React, {useState} from 'react'
import './Instruction.css'

export default function Instruction() {
    let optionsState;
    const [cur_category, set_category] = useState("Podcast");
    console.log(cur_category)

    return (
        <div className="m-20">
            <select className='border border-black text-gold px-8 py-2' value={optionsState} onChange={(e) => set_category(e.target.value)}>
                <option value="Podcast">Podcast</option>
                <option value="Video">Video</option>
            </select>
            
        </div>

    )
}
