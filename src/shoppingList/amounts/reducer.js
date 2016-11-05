import {
       RECEIVE_AMOUNTS, OPEN_MODAL, CLOSE_MODAL
} from './actionTypes'

const initialState = {
    amounts: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_AMOUNTS:
           return {...state, amounts: action.amounts}
        case OPEN_MODAL:
            return state.set('showOpenModal', true);
        case CLOSE_MODAL:
            return state.set('showOpenModal', false);
        default:
            return state
    }
}