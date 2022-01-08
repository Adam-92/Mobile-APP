import React from 'react'
import { useGlobalContext } from '../context/context'
/* Cart item */
const CartItem = ({ id, img, title, price, amount }) => {

 const {clearSingleElement, toggleAmount} = useGlobalContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* Remove button */}
        <button
          className='remove-btn'
          onClick={()=>clearSingleElement(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* Increase amount */}
        <button className='amount-btn' onClick={() =>toggleAmount(id, 'increase')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* Amount */}
        <p className='amount'>{amount}</p>
        {/* Decrease amount */}
        <button className='amount-btn' onClick={() => toggleAmount(id, 'decrease')}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CartItem
