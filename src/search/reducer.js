/**
 * Created by Piotr on 2016-10-29.
 */
import { SEARCH, SET_FILTER_VALUE } from './actionTypes'



const initialState = {

    currentFilterValue: ''
}


export  default  (state = '', action) => {

    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                term: action.term
    })
        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                currentFilterValue: action.filterValue
            })
        default:
            return state;
    }

}

