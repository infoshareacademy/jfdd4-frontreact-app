
import {
    RECEIVE_LIST, OPEN_MODAL, CLOSE_MODAL
}
from './actionTypes'

const initialState = {
   list: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_LIST:
            return {...state, list: action.list}
        case OPEN_MODAL:
            return state.set('showOpenModal', true);
        case CLOSE_MODAL:
            return state.set('showOpenModal', false);
        default:
            return state
    }
}

