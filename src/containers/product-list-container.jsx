
import { connect } from 'react-redux'
import ProductList from '../components/products/productlist';
import { getAllProducts } from '../actions/product-actions'
import { addToCart } from '../actions/cart-actions'
import { addQuantity, subtractQuantity } from '../actions/product-quantity-actions'

const mapStateToProps = (state) => {
	return {
		products: state.products.allProducts,
		cart: state.cart
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (product) => { dispatch(addToCart(product)) },
		incrementProductQuntity: (productId) => { dispatch(addQuantity(productId)) },
		decrementProductQuntity: (productId) => { dispatch(subtractQuantity(productId)) },
		getAllProducts: () => { dispatch(getAllProducts()) }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)