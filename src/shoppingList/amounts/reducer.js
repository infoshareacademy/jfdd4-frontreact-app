import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
} from './actionTypes'

const initialState = {
    amounts: [],
    fetchingAmounts: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AMOUNTS:
            return Object.assign({}, state, {
                fetchingAmounts: true
            })
        case RECEIVE_AMOUNTS:
            return Object.assign({}, state, {
                amounts: action.amounts,
                fetchingAmounts: false
            })
        default:
            return state
    }
}