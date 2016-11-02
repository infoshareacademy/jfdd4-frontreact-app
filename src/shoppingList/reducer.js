/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    RECEIVE_ITEMS
} from './actionTypes'

const initialState = {
    items: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return {...state, items: action.items}
        default:
            return state
    }
}