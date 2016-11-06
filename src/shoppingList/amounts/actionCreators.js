/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
    ADD_PRODUCT_BEGIN,
    ADD_PRODUCT_END,
    OPEN_MODAL,
    CLOSE_MODAL
} from './actionTypes'

import fetch from 'isomorphic-fetch'

//amounts

export function fetchAmounts () {
    return function (dispatch) {
    return fetch(`${process.env.PUBLIC_URL}/data/amounts.json`)
        .then(response => response.json())
        .then(amounts => dispatch({
            type: RECEIVE_AMOUNTS,
            amounts: amounts
        }))
}}

export function updateQuantity(shopName, quantity) {
    return function (dispatch) {
        return fetch('.................................' + shopName, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quantity: quantity
            })
        })
            .then(response => dispatch(fetchAmounts()))
    }
}


//shoppinglist

function addProductBegin() {
    return {
        type: ADD_PRODUCT_BEGIN
    }
}

function addProductEnd() {
    return {
        type: ADD_PRODUCT_END
    }
}

export function addProduct(itemId, quantity, price, productName, shopName) {
    return function (dispatch) {
        dispatch(addProductBegin())
        return fetch('http://rest.learncode.academy/api/sugero/list', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemId: itemId,
                quantity: quantity,
                price: price,
                productName:  productName,
                shopName: shopName,
                
            })
        })
            .then(response => response.json())
            .then(product => {
                dispatch(addProductEnd())
            })
    }
}


export function openModal(result) {
    return {
        currentResult: result,
        type: OPEN_MODAL
    };
}

export function closeModal(result) {
    return {
        currentResult: result,
        type: CLOSE_MODAL
    };
}
