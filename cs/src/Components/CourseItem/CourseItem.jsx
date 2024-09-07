import React from 'react'
import './CourseItem.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <b><p className='item-title'>{props.title}</p></b>
      <br></br>
      <p><b>Description: </b>{props.description}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
