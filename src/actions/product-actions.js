import { GET_ALL_PRODUCT, GET_PRODUCT } from '../action-constants/constants'

/**
 * getproductById
 * @param {Number} productId 
 */
export const getProductById = (productId) => {
  return {
    type: GET_PRODUCT,
    payload: { productId }
  }
}

/**
 * getAllProducts
 */
export const getAllProducts = () => {
  debugger;
  return {
    type: GET_ALL_PRODUCT
  }
}