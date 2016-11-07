
import {
    RECEIVE_LIST
}
from './actionTypes'

const initialState = {
   list: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_LIST:
            return {...state, list: action.list}
        default:
            return state
    }
}

