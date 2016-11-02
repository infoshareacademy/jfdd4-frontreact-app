/**
 * Created by piotrszablewski on 02.11.16.
 */
import { ACTIVE_FILTER } from './actionTypes'


export function filterProducts(searchTerm) {

    return {
        type: ACTIVE_FILTER,
        searchTerm:searchTerm
    }
}