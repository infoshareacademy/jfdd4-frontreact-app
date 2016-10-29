/**
 * Created by Piotr on 2016-10-29.
 */
import { SEARCH } from './actionTypes'





export  default  (state = '', action) => {

    switch (action.type) {
        case SEARCH:
            return action.term;
        default:
            return state;
    }

}