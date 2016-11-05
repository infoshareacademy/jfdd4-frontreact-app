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
            console.log("before");
            console.log("name = " + action.nameOfFilterToActivate);
            console.log("names = " + state.activeFilterNames);


            var filterIndex = state.activeFilterNames.indexOf(action.nameOfFilterToActivate);
            console.log("after");
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