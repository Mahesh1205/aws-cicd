import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderContainer from './headerContainer';
import CartDetail from '../components/cart/cart-detail-page';
import Footer from '../components/common/footer';
import { addQuantity, subtractQuantity } from '../actions/product-quantity-actions';
import { addToCart, removeItemFromCart } from '../actions/cart-actions';

const CartDetailContainer = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selected_product || {});
  const cartItems = useSelector(state => state.cart.addedItems);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleRemoveProduct = productId => {
    dispatch(removeItemFromCart(productId));
  };

  const handleIncrementProductQuantity = productId => {
    dispatch(addQuantity(productId));
  };

  const handleDecrementProductQuantity = productId => {
    dispatch(subtractQuantity(productId));
  };

  return (
    <div>
      <HeaderContainer showCartAndLoginInfo={true} />
      <CartDetail
        product={product}
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeProductHandler={handleRemoveProduct}
        incrementProductQuntity={handleIncrementProductQuantity}
        decrementProductQuntity={handleDecrementProductQuantity}
      />
      <Footer />
    </div>
  );
};

export default CartDetailContainer;
