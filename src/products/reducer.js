import {
    ACTIVATE_FILTER,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS
} from './actionTypes'

const initialState = {
    avaliableFilters: ['all', 'isCereal', 'isOils', 'isRice', 'isFruit', 'isFish', 'isBread', 'price1', 'price2', 'price3'],
    activateFilterName: 'all',
    products: [],
    fetchingProducts: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case ACTIVATE_FILTER:
            return Object.assign({}, state, {
                activeFilterName: action.nameOfFilterToActivate
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
        default:
            return state
    }
}