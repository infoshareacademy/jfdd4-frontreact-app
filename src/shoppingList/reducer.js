/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    RECEIVE_PRODUCTS
} from './actionTypes'

const initialState = {
    products: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, products: action.products}
        default:
            return state
    }
}