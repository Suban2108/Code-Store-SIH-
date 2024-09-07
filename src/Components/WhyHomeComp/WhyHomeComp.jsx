import React from 'react'
import './WhyHomeComp.css'
import InfoComponent from '../InfoComponent/InfoComponent'
import data_product from '../Assets/WhyCS_data'


const WhyHomeComp = () => {
    return (
        <div className='whyhomecomp'>
            <div className="whyhomecomp-h1-img">
                <h1>WHY <strong>CODE STORE</strong> ?</h1>
            </div>
            <div className="whyhomecomp-hr"></div>
            <div className="whyhomecomp-item">
                {data_product.map((item, i) => {
                    return <InfoComponent key={i} id={item.id} title={item.title} image={item.image} description={item.description} data_src={item.data_src}/>
                })}
            </div>
        </div>
    )
}

export default WhyHomeComp
