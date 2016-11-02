/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
    ADD_PRODUCT_BEGIN,
    ADD_PRODUCT_END
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

export function addProduct(amountsName, quantity) {
    return function (dispatch) {
        dispatch(addProductBegin())
        return fetch('https://.../api/shoppingList', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amountsName: amountsName,
                quantity: quantity
            })
        })
            .then(response => response.json())
            .then(product => {
                dispatch(addProductEnd())
            })
    }
}