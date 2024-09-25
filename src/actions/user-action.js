import { ADD_USER, REMOVE_USER } from '../action-constants/constants'


export const addUser = (userName) => {
    return {
        type: ADD_USER,
        payload:  {userName} 
    }
}

export const removeUser = (id) => {
    return {
        type: REMOVE_USER,
    }
}