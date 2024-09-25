import { ADD_QUANTITY, SUB_QUANTITY } from '../action-constants/constants'


export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}