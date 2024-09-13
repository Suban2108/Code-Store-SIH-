import React from 'react'
import './CSS/Lectures.css'
import LecturesPlaylist from '../LecturesPlaylist/LecturesPlaylist'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import Description from '../Description/Description'
import Comments from '../Comments/Comments'


function Lectures() {
    let description ="Comprehensive course covering both front-end and back-end technologies, including MERN stack development.";
    let title = "Full Stack Web Development";
    return (
        <div className='lectures'>
            <div className="lectures-left">
                <div className='m-5 mt-8'>
                    <VideoPlayer />
                </div>
                <div className='w-[950px]'>
                    <Description title={title} description={description} />
                </div>
                <div className="w-[910px] m-5">
                    <Comments />
                </div>
            </div>
            <div className="lectures-right">
                <LecturesPlaylist />
            </div>

        </div>
    )
}

export default Lectures
