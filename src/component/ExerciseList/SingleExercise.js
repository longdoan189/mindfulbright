import React, { useEffect } from "react";
import {NavLink, useLocation} from "react-router-dom";
import DATA from '../../data/post.json'
import './SingleExercise.css'
export default function Exercise(props) {

    const {pathname} = useLocation();
    const id = pathname.split("/").slice(-1)[0];
    const curExercise = DATA.filter(ex => {return ex.id === id})[0];
    const renderContent = () => {
        let frame;
        if (curExercise.content === null || curExercise.content === "" || curExercise.content===undefined) {
            return (
                <div className="text-gold text-5xl text-center container-iframe-no mx-auto">
                    <p>Bài tập này hiện chưa sẵn sàng.</p>
                    <p>Bạn hãy thử các bài khác nhé!</p>
                </div>
                
            )
        }
        if(curExercise.type==="Video") {
            if(curExercise.ratio === "4:3") {
                frame = "container-iframe-4-3"
            }
            else if(curExercise.ratio === "3:2") {
                frame = "container-iframe-3-2"
            }
            else {
                frame = "container-iframe-16-9"
            }
            return (
                <div className={"my-8 mx-auto " + frame}>
                    <iframe src={curExercise.content} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" title="video" autoPlay="1" className="responsive-iframe"></iframe>
                </div>
            )
        }
    }

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        }
    })

    return (
        <div className="w-100">
            <div className="grid grid-cols-3">
                <button className="text-sm md:text-lg background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block">
                    <NavLink to="/instruction">
                        <b>Xem các bài tập khác</b>
                    </NavLink>
                </button>
                <h1 className="text-4xl text-blue text-center mx-8 col-span-2">{curExercise.name}</h1>
            </div>
            <h1 className="text-xl text-blue text-left mx-16 my-8">{curExercise.description}</h1>
            {renderContent()}
        </div>

    )
}