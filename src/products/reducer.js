import {
    ACTIVATE_FILTER,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS
} from './actionTypes'

import {
    RECEIVE_FAVORITES
} from '../app/actionTypes'

const initialState = {
    availableFilters: ['cereals', 'oils', 'rices', 'fruits', 'fish', 'breads'],
    activeFilterNames: [],
    products: [],
    fetchingProducts: false,
    favoriteProducts: []
}

export default (state=initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case ACTIVATE_FILTER:
            var newActiveFilterNames = state.activeFilterNames;
            var filterIndex = newActiveFilterNames.indexOf(action.nameOfFilterToActivate);
            if (filterIndex > -1){
                newActiveFilterNames.splice(filterIndex, 1)
            } else {
                newActiveFilterNames = newActiveFilterNames.concat(action.nameOfFilterToActivate)
            }
            return Object.assign({}, state, {
                activeFilterNames:  newActiveFilterNames
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