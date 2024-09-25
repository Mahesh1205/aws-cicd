import React from 'react'
import CartItems from './cart-items';
import './cart-detail-page.scss';

const CartDetailPage = (props) => {
    const updateQuantityClickHandler = (actionId, prodId) => {
        //todo: based on constant name
        if (actionId === 1) {
            return props.incrementProductQuntity(prodId);
        } else {
            return props.decrementProductQuntity(prodId);
        }
    }
    debugger;
    return (
        <div className='container cart-container'>
            <div className="row">
                {<CartItems cartItems={props.cartItems}  onClickUpdateItem = {updateQuantityClickHandler}  {...props} />}
            </div>
            <div className="row action-block">
                <button type="button" className={props.cartItems.length > 0 ? " " : "disabled"}  >
                    PROCEED TO CHECKOUT
            </button>
            </div>
        </div>
    )
}

export default CartDetailPage;

