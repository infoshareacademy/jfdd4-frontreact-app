/**
 * Created by Piotr on 2016-10-29.
 */
import { SEARCH } from './actionTypes'


export function search(term) {
    return{
        type: SEARCH,
        term: term
    }
}
