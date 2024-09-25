import { ADD_TO_CART, REMOVE_ITEM_CART } from '../action-constants/constants'

/**
 * addTocart
 * @param {Object} product 
 */
export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        item: product
    }
}


/**
 * addTocart
 * @param {Number} productId 
 */
export const removeItemFromCart = (productId) => {
    return {
        type: REMOVE_ITEM_CART,
        productId
    }
}




