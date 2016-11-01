/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    ADD_PRODUCT_BEGIN,
    ADD_PRODUCT_END,
} from './actionTypes'
import fetch from 'isomorphic-fetch'

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

export function addProduct(shopName, quantity) {
    return function (dispatch) {
        dispatch(addProductBegin())
        return fetch('https://ancient-peak-51314.herokuapp.com/api/achievements', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                studentId: shopName,
                score: quantity,
            })
        })
            .then(response => response.json())
            .then(product => {
                dispatch(addProductEnd())
            })
    }
}

