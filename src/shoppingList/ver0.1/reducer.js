
import { GET_PRODUCTS_END } from './actionTypes'


const initialState = []

export default (state = initialState, action ) => {
    switch (action.type) {
        case GET_PRODUCTS_END:
            return action.products
        default:
            return state
    }
}