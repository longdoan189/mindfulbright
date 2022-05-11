import React, { useState } from 'react'
import ExerciseList from '../ExerciseList/ExerciseList';
import './Instruction.css'

export default function Instruction() {
    const [cur_category, set_category] = useState("Video");
    const [cur_time, set_time] = useState("15");
    console.log(cur_time, cur_category);

    return (
        <div className="mx-2 sm:mx-8 lg:mx-12">
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2'>
                {/**
                <select className='border border-gray-500 text-gold px-8 py-2 col-start-8 col-span-1 rounded-lg mr-4 z-10 cursor-pointer' value={optionsState} onChange={(e) => set_category(e.target.value)}>
                    <option value="Video">Video</option>
                    <option value="Podcast">Podcast</option>
                </select>
                */}
                <div id="duration-wrapper" className="sidebar_wrapper sliderWrapper ml-6 lg:col-span-2 ">
                    <div id="duration-slider" className="slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                        <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0%', width: '100%' }} />
                        <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0%' }} onClick={() => {set_time('15')}} />
                        <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '33.3%' }} onClick={() => {set_time('30')}}/>
                        <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '66.7%' }} onClick={() => {set_time('45')}}  />
                        <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '100%' }} onClick={() => {set_time('60')}}/>
                    </div>
                    <div className="legend">
                        <label style={{ width: '16.7%' }} onClick={() => {set_time('15')}} className={cur_time==='15' ? "text-red-500" : "text-blue-700"}>15'</label>
                        <label style={{ width: '33.3%' }} onClick={() => {set_time('30')}} className={cur_time==='30' ? "text-red-500" : "text-blue-700"}>30'</label>
                        <label style={{ width: '33.3%' }} onClick={() => {set_time('45')}} className={cur_time==='45' ? "text-red-500" : "text-blue-700"}>45'</label>
                        <label style={{ width: '16.7%' }} onClick={() => {set_time('60')}} className={cur_time==='60' ? "text-red-500" : "text-blue-700"}>60'</label>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2 sm:col-start-2 lg:col-start-4 mx-4'>
                    <button className={"text-sm md:text-lg mt-5 text-white hover:text-yellow-500 w-full py-3 border rounded-lg mx-auto block " + (cur_category==='Video' ? "bg-red-500" : "background-gold")} onClick={() => { set_category("Video") }}>Video</button>
                    <button className={"text-sm md:text-lg mt-5 text-white hover:text-yellow-500 w-full py-3 border rounded-lg mx-auto block " + (cur_category==='Podcast' ? "bg-red-500" : "background-gold")} onClick={() => { set_category("Podcast") }}>Podcast</button>
                </div>
            </div>
            <ExerciseList className="height-80vh" cur_category={cur_category} cur_time={cur_time} shall_break={true} />

        </div>

    )
}
