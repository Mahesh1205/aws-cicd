import _ from 'lodash'
import { ADD_TO_CART, REMOVE_ITEM_CART, ADD_QUANTITY, SUB_QUANTITY } from '../action-constants/constants'

const initState = {
  addedItems: [],
  totalAmount: 0
}

/**
 * cartReducer
 * @param {} state 
 * @param {} action 
 */
const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const addedItemQuntity = action.item.quantity;
      let existed_item = state.addedItems.find(item => action.item.id === item.id)
      if (existed_item) {
        existed_item.quantity = existed_item.quantity + 1;
        return {
          ...state,
          addedItems: [...state.addedItems],
          totalAmount: state.totalAmount + (action.item.price * 1)
        }
      }
      else {
        //calculating the total           
        action.item.quantity = 1;
        let newTotal = state.totalAmount + (action.item.price * 1)
        return {
          ...state,
          addedItems: [...state.addedItems, action.item],
          totalAmount: newTotal
        }

      }
    case REMOVE_ITEM_CART:
      const itemToRemove = state.addedItems.find(item => action.productId === item.id)
      const new_items = state.addedItems.filter(item => action.productId !== item.id)
      const newTotal = state.totalAmount - (itemToRemove.price * itemToRemove.quantity)
      return {
        ...state,
        addedItems: new_items,
        totalAmount: newTotal
      }
    case ADD_QUANTITY:
      {
        const addedItem = state.addedItems.find(item => item.id === action.id)
        if (!_.isEmpty(addedItem)) { // update if item is already added into cart
          addedItem.quantity += 1
          const newTotal = state.totalAmount + addedItem.price
          return {
            ...state,
            addedItems: [...state.addedItems],
            totalAmount: newTotal
          }
        } else {
          return {
            ...state
          }
        }
      }
    case SUB_QUANTITY:
      {
        const itemToRemove = state.addedItems.find(item => item.id === action.id)
        //if the qt == 0 then it should be removed
        if (_.isEmpty(itemToRemove) || itemToRemove.quantity === 0) {
          return {
            ...state
          }
        }
        if (itemToRemove.quantity === 1) {
          itemToRemove.quantity -= 1
          const new_items = state.addedItems.filter(item => item.id !== action.id)
          const newTotal = state.totalAmount - itemToRemove.price
          return {
            ...state,
            addedItems: new_items ? new_items : [],
            totalAmount: newTotal ? newTotal : 0
          }
        }
        else {
          itemToRemove.quantity -= 1
          const newTotal = state.totalAmount - itemToRemove.price
          return {
            ...state,
            addedItems: [...state.addedItems],
            totalAmount: newTotal
          }
        }
      }
    default:
      return state
  }
}

export default cartReducer