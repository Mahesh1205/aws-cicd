import React from "react";
import { connect } from "react-redux";
import HeaderContainer from "./headerContainer";
import ProductDetail from "../components/products/product-detail";
import Footer from "../components/common/footer";
import {
  addQuantity,
  subtractQuantity
} from "../actions/product-quantity-actions";
import { getProductById } from "../actions/product-actions";
import { addToCart } from "../actions/cart-actions";

const ProductDetailContainer = props => {
  return (
    <div>
      <HeaderContainer showCartAndLoginInfo={true} />
      <ProductDetail {...props} />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    product: state.products.selected_product || {},
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductById: productId => {
      dispatch(getProductById(productId));
    },
    addToCart: product => {
      dispatch(addToCart(product));
    },
    incrementProductQuntity: productId => {
      dispatch(addQuantity(productId));
    },
    decrementProductQuntity: productId => {
      dispatch(subtractQuantity(productId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductDetailContainer
);
