import React from 'react'
import './InfoComponent.css'

const WhyComponent = (props) => {
    return (
        <div className="whycomp">
            <div data-aos="fade-up" data-aos-duration="2000" className="single_service aos-init aos-animate">
                <div className="single_service-left">
                    <div className="icon">
                        <img className="img-icon lazy" src={props.image} alt="World-Class Faculty"/>
                    </div>
                </div>
                <div className="single_service-body">
                    <h4 className="single_service-heading">{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default WhyComponent
