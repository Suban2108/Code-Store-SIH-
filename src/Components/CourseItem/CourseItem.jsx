import React, { useContext } from 'react'
import './CourseItem.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'


const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='item'>
      <div className="item-img">
        <Link to={`/`}><img src={props.imageurl} alt="" /></Link>
      </div>

      <div className="item-detail">
        <b><p className='item-title'>{props.title}</p></b>
        <br></br>
        <div className="item-description">
          <p><b>Description: </b>{props.description}</p>
        </div>
        <div className="item-prices">
        <div className="item-item-prices">
          <div className="item-price-new">
            ${props.new_price}
          </div>
          <div className="item-price-old">
            ${props.old_price}
          </div>
        </div>
          <div className="item-cart-button">
            <button onClick={() => { addToCart(props.id) }}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
