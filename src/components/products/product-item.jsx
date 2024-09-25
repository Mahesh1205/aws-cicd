import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Counter from "./product-counter";
import './product-item.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    };
  }

  addProductToCart = (product) => {
    this.props.addToCart(product);
    this.setState(
      {
        isAdded: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            isAdded: false
          });
        }, 3000);
      }
    );
  }

  render() {
    const product = this.props.product;
    const { image, name, price, id } = product;
    return (
      <div className="product">
        <Link to={`product/${id}`}>
          <div className="product-image">
            <img src={image} alt={name} />
          </div>
        </Link>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>
        <Counter
          productQuantity={product.quantity}
          updateQuantityHandler={(actionId) => { this.props.updateQuantityHandler(actionId, id) }}
        />
        <div className="product-action">
          <button
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={() => { this.addProductToCart(product) }}
          >
            {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
