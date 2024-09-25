import _ from 'lodash'
import {GET_ALL_PRODUCT, GET_PRODUCT} from '../action-constants/constants'
import products from '../resources/products-list.json';

const allProducts = products.map((product) => {
  product.quantity = 0;
  product.description = 'Test description of the product...'
  return product;
});

 
/**
 * productsReducer
 * @param  {Any} state 
 * @param  {Object} action
 */

const productsReducer = (state = { selected_product: {}, allProducts: [] }, action) => {
   switch(action.type){
       case GET_PRODUCT:
       return Object.assign({},  { ...state, 
        selected_product:  _.find(allProducts, { id: action.payload.productId })  
      });
      case GET_ALL_PRODUCT:
        return Object.assign({}, { ...state, allProducts: allProducts })
   	  default:
   	  return state
   }
}
export default productsReducer