
import { finalState } from '../data/dataShops'
import {
    REQUEST_SHOPS,
    RECEIVE_SHOPS
} from './actionTypes'
const initialState = {
    shops:finalState.shops
}




export default (state = initialState, action) => {
    switch (action.type){
        case REQUEST_SHOPS:
            return Object.assign({}, state, {
                fetchingShops: true
            })
        case RECEIVE_SHOPS:
            return Object.assign({}, state, {
                shops: action.shops,
                fetchingShops: false
            })
        default:
            return state;
    }
}

