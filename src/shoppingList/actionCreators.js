/**
 * Created by kbro2 on 30.10.2016.
 */


import {
    GET_PRODUCTS,
    RECEIVE_PRODUCTS,

} from './actionTypes'

import fetch from 'isomorphic-fetch'



export function fetchProducts() {
    return function (dispatch) {
        return fetch('http://rest.learncode.academy/api/sugero/shoppingLists')
            .then(response => response.json())
            .then(amounts => dispatch({
                type: RECEIVE_PRODUCTS,
                products: products
            }))
    }}

export function deleteProduct(productId) {
    return function (dispatch) {
        return fetch('http://rest.learncode.academy/api/sugero/shoppingLists' + productId, {
            method: 'DELETE'
        })
            .then(response => dispatch(fetchProducts()))
    }
}