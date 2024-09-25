import React, { Component } from 'react'
import ProductItem from './product-item'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './productlist.scss';


export default class ProductList extends Component {
	componentDidMount() {
		this.props.getAllProducts()
	}

	updateProductQuantity = (actionId, prodId) => {
		//todo: based on constant name
		if (actionId === 1) {
			return this.props.incrementProductQuntity(prodId);
		} else {
			return this.props.decrementProductQuntity(prodId);
		}
	}

	render() {
		let productsData;
		let products = this.props.products || [];
		productsData = products
			.map(product => {
				return (
					
					<ProductItem
						key={product.id}
						product={product}
						updateQuantityHandler={this.updateProductQuantity}
						addToCart={(product) => { this.props.addToCart(product) }}
					/>
				);
			});

		let view = (
			<CSSTransitionGroup
				transitionName="fadeIn"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
				component="div"
				className="products"
			>
				{productsData}
			</CSSTransitionGroup>
		);
		return <div className="products-wrapper">{view}</div>;

	}

}



