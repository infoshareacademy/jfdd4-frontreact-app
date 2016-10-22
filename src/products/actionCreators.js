import { ACTIVATE_FILTER, REQUEST_PRODUCTS, RECEIVE_PRODUCTS }  from './actionTypes'
import fetch from 'isomorphic-fetch'

export function activateFilter(filterName) {
    return {
        type: ACTIVATE_FILTER,
        nameOfFilterToActivate: filterName
    }
}

function requestProducts () {
    return {
        type: REQUEST_PRODUCTS
    }
}

export const fetchProducts = () => dispatch => {
    dispatch(requestProducts())
    return fetch(`${process.env.PUBLIC_URL}/data/products.json`)
        .then(response => { console.log(response); return response.json()})
         .then (json => { console.log(json); return dispatch (receiveProducts(json))})
}
