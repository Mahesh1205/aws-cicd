import _ from 'lodash'
import {ADD_USER, REMOVE_USER} from '../action-constants/constants'
/**
 * productsReducer
 * @param  {Any} state 
 * @param  {Object} action
 */

const userReducer = (state = {  userData: {} }, action) => {
   switch(action.type){
       case ADD_USER:
       return Object.assign({},  { ...state, 
        userData: { userName: action.payload.userName }
      });
      case REMOVE_USER:
        return Object.assign({}, { ...state, userData: {} })
   	  default:
   	  return state
   }
}
export default userReducer