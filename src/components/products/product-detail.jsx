import React, { Component } from 'react'
import ProductCounter from './product-counter'
import './product-detail.scss';

export default class ProductDetailPage extends Component {
    componentDidMount() {
        this.props.getProductById(Number.parseInt(this.props.match.params.id));
    }

    updateQuantityClickHandler = (actionId, prodId) => {
        //todo: based on constant name
        if (actionId === 1) {
            return this.props.incrementProductQuntity(prodId);
        } else {
            return this.props.decrementProductQuntity(prodId);
        }
    }

    render() {
        const { product } = this.props;
        return (
                <div class="container">
                    <div class="card">
                        <div class="container-fliud">
                            <div class="wrapper row">
                                <div class="preview col-md-6">
                                    <div class="preview-pic tab-content">
                                        <div class="tab-pane active" id="pic-1"><img alt='product detail' src={this.props.product.image} /></div>
                                    </div>
                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">{this.props.product.title}</h3>
                                    <div class="rating">
                                        <div class="stars">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>
                                        </div>
                                        <span class="review-no">41 reviews</span>
                                    </div>
                                    <div><b>Description : </b><p class="product-description">{this.props.product.description}</p>
                                    </div>
                                    <h4 class="product-price">Current Price: <span>&#x20b9; {this.props.product.price}</span></h4>

                                    <div class="row qty-dwn">
                                        <div class="col-md-2">
                                            Qty:
                                        </div>
                                        <div class="col-md-4">
                                            <ProductCounter productQuantity={this.props.product.quantity} updateQuantityHandler={(actId) => { this.updateQuantityClickHandler(actId, product.id) }}></ProductCounter>
                                        </div>
                                    </div>
                                    <div className=" action product-action">
                                        <button
                                            className={""}
                                            type="button"
                                            onClick={() => { this.props.addToCart(product) }}
                                        >
                                            {"ADD TO CART"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
