import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {history} from "../../App"
import DATA from '../../data/post.json'
import './SingleExercise.css'

export default function Exercise(props) {

    const { pathname } = useLocation();
    const id = pathname.split("/").slice(-1)[0];
    const curExercise = DATA.filter(ex => { return ex.id === id })[0];

    const [isShowLink, setShowLink] = useState(false)
    const showLink = (isShow, type) => {
        if (isShow && type === "Video") {
            return "Bạn có thể đang sử dụng tính năng chặn quảng cáo hoặc chặn theo dõi (ví dụ AdBlock hoặc Edge ở chế độ Bảo mật). Bạn có thể thử tắt nó, sau đó tải lại trang. Nếu bạn không muốn tắt nó, bạn có thể truy cập trực tiếp tại nút 'pop' ở góc trên cùng bên phải của video"
        }
        if (isShow && type === "Podcast") {
            return "Tính năng nghe podcast đang được xây dựng nên có thể lỗi ở một số nền tảng. Bạn có thể thử các bài khác nhé!"
        }
        else {
            return ""
        }
    }
    const renderContent = () => {
        let frame;
        if (curExercise.content === null || curExercise.content === "" || curExercise.content === undefined) {
            return (
                <div className="text-gold text-5xl text-center container-iframe-no mx-auto">
                    <p>Bài tập này hiện chưa sẵn sàng.</p>
                    <p>Bạn hãy thử các bài khác nhé!</p>
                </div>

            )
        }
        if (curExercise.type === "Video") {
            if (curExercise.ratio === "4:3") {
                frame = "container-iframe-4-3"
            }
            else if (curExercise.ratio === "3:2") {
                frame = "container-iframe-3-2"
            }
            else {
                frame = "container-iframe-16-9"
            }
            return (
                <div className="w-100 my-8">
                    <p className="text-center text-gold cursor-pointer" onClick={() => { setShowLink(!isShowLink) }}>Không xem được video này?</p>
                    <p className="text-center text-blue mx-8 sm:mx-32 lg:mx-64">{showLink(isShowLink, curExercise.type)}</p>
                    <div className={"mx-auto " + frame}>
                        <iframe src={curExercise.content} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" title="video" allow="autoplay" className="responsive-iframe"></iframe>
                    </div>
                </div>
            )
        }

        if (curExercise.type === "Podcast") {
            return (
                <div className="w-100 my-8">
                    <p className="text-center text-gold cursor-pointer" onClick={() => { setShowLink(!isShowLink) }}>Không nghe được podcast này?</p>
                    <p className="text-center text-blue mx-8 sm:mx-32 lg:mx-64">{showLink(isShowLink, curExercise.type)}</p>
                    <div className={"mx-auto container-iframe-audio"}>
                        <iframe src={curExercise.content} frameBorder="0" allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" title="video" autoPlay="1" className="responsive-iframe"></iframe>
                    </div>
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
            <div className="">
                <h1 className="text-4xl text-blue text-center mx-8">{curExercise.name}</h1>
            </div>
            <h1 className="text-xl text-blue text-left mx-8 sm:mx-20 lg:mx-40 my-8">{curExercise.description}</h1>
            {renderContent()}
            <button className="text-sm background-gold hover:text-yellow-500 px-3 py-3 border rounded-lg mx-auto block" onClick={history.goBack}>
                <b>Xem các bài tập khác</b>
            </button>
        </div>

    )
}