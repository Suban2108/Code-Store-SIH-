import React from 'react'
import './HomeRefVideo.css'

const HomeRefVideo = () => {
    return (
        <div className="container-fluid bannerBg">
            <div className="py-5 container">
                <div className="row">
                    <div className="col-sm-6 left-text">
                        <h1 className="text-warning">
                            Platform where Theory meets Application
                        </h1>
                        <p className="text-white">
                            Focus on Implementation and project based learning
                        </p>
                        <a href="/s/store" className="btn white-btn">
                            Explore All Courses
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <div className="embed-responsive iframe-tag embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-42K44A1oMA?si=xd9JI3hK76lDA4gX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeRefVideo
