import { ACTIVATE_FILTER, REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from './actionTypes'
import fetch from 'isomorphic-fetch'


export function activateFilter(filterName) {
    console.log("activate filter");
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

function receiveProducts (products) {
    return {
        type: RECEIVE_PRODUCTS,
        products: products
    }
}

export function fetchProducts () {
    return function (dispatch) {
        dispatch(requestProducts());
        return fetch(`${process.env.PUBLIC_URL}/data/products.json`)
            .then(response => response.json())
            .then(products => dispatch(receiveProducts(products)))
    }
}
