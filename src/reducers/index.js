import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import cartReducer from './cart-reducer'
import userReducer from './user-reducer'


export default combineReducers({
  products:productsReducer,
  cart:cartReducer,
  user: userReducer,
}) 