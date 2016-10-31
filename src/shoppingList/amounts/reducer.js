import {
       RECEIVE_AMOUNTS
} from './actionTypes'

const initialState = {
    amounts: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_AMOUNTS:
           return {...state, amounts: action.amounts}
        default:
            return state
    }
}