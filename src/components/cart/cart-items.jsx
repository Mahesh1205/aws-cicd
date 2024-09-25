import React from 'react'
import CartItem from './cart-item';
import EmptyCart from './empty-cart';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

const CartItems = ({ cartItems, onClickUpdateItem, removeProductHandler }) => {
    debugger;
    const cartItemDetails = cartItems.map(product => {
        return <CartItem key={product.id} product={product} removeProductHandler={removeProductHandler} updateQuantityClickHandler={onClickUpdateItem}></CartItem>
    });
    const cartView = (cartItems.length <= 0)
        ? <EmptyCart />
        : (<CSSTransitionGroup
            transitionName="fadeIn"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            component="div"
            className="container"
        >
            {cartItemDetails}
        </CSSTransitionGroup>);
    return cartView
}

export default CartItems;
