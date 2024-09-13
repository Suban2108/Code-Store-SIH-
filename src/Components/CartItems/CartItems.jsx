import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import Arrow_up_icon from '../Assets/Arrow_up_icon.png'
import Arrow_down_icon from '../Assets/Arrow_down_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount, addToCart, removeCartItem } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p></p>
                <p>Quantity</p>
                <p></p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <div className="cartitems-hr"></div>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.imageurl} className='carticon-product-icon' alt="" />
                                <p>{e.title}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-addon' onClick={() => addToCart(e.id)}><img src={Arrow_up_icon} alt="" /></button>
                                      <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <button className='cartitems-addon' onClick={() => removeFromCart(e.id)}><img src={Arrow_down_icon} alt="" /></button>
                                <p className='cartitems-totals'>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeCartItem(e.id) }} alt="" />
                            </div>
                            <div className='cartitems-format-main-hr'></div>
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="cartitems-total-item-hr"></div>

                        <div className="cartitems-total-item">
                            <p>Other Cost</p>
                            <p>Free</p>
                        </div>
                        <div className="cartitems-total-item-hr"></div>

                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
