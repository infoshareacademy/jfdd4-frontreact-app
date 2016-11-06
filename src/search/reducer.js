/**
 * Created by Piotr on 2016-10-29.
 */
import { SEARCH } from './actionTypes'

const initialState = {
    searchTerm: ''
}

export  default  (state = initialState, action) => {

    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                searchTerm: action.term
            })
        default:
            return state;
    }

}

