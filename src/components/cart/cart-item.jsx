import React from 'react'
import ProductCounter from '../products/product-counter'
import './cart-item.scss';

const CartItem = (props) => {
  debugger;
  const { product, updateQuantityClickHandler, removeProductHandler } = props;
  return (
    <div className="row cart-item">
      <div className="col-md-3">
        <img className="product-image" alt={'loading-img'} src={product.image} />
        <div className="product-info">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
        </div>
      </div>
      <div className="col-md-3">
        <ProductCounter productQuantity={product.quantity} updateQuantityHandler={(actId) => { updateQuantityClickHandler(actId, product.id) }}></ProductCounter>
      </div>
      <div className="col-md-3 ">
        <p className="quantity">
          {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{""}
        </p>
        <p className="amount">{product.quantity * product.price}</p>
      </div>
      <button className="product-remove" onClick={() => { removeProductHandler(product.id) }} > × </button>
    </div>
  );
}
export default CartItem