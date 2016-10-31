/**
 * Created by Piotr on 2016-10-29.
 */
import { SEARCH, SET_FILTER_VALUE } from './actionTypes'


export function search(term) {
    return{
        type:SEARCH,
        term : term
    }
}
export function setFilterValue(newFilterValue) {
    return {
        type: SET_FILTER_VALUE,
        filterValue: parseInt(newFilterValue === '' ? 0 : newFilterValue)
    }
}