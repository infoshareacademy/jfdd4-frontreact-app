import {
    ACTIVATE_FILTER,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS
} from './actionTypes'

import {
    RECEIVE_FAVORITES
} from '../app/actionTypes'

const initialState = {
    availableFilters: ['cereals', 'oils', 'rices', 'fruits', 'fishs', 'breads'],
    activeFilterNames: [],
    products: [],
    fetchingProducts: false,
    favoriteProducts: []
}

export default (state=initialState, action) => {
    switch (action.type) {
        case ACTIVATE_FILTER:
            var filterIndex = state.activeFilterNames.indexOf(action.nameOfFilterToActivate);
            if (filterIndex > -1){
                state.activeFilterNames.splice(filterIndex, 1)
            } else {
                state.activeFilterNames = state.activeFilterNames.concat(action.nameOfFilterToActivate)
            }
            return Object.assign({}, state, {
                activeFilterNames:  state.activeFilterNames
            })
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                fetchingProducts: true
            })
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                products: action.products,
                fetchingProducts: false
            })
        case RECEIVE_FAVORITES:
            return Object.assign({}, state, {
                favoriteProducts: action.favoriteProducts
            })
        default:
            return state
    }
}