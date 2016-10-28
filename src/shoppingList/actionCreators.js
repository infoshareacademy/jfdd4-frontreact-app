import {GET_PRODUCTS_BEGIN, GET_PRODUCTS_END, REQUEST_AMOUNT_AT_STORE, RECEIVE_AMOUNT_AT_STORE, ADD_PRODUCT_BEGIN, ADD_PRODUCT_END,} from './actionTypes'
import fetch from 'isomorphic-fetch'


//products list

function getProductsBegin() {
    return {
        type: GET_PRODUCTS_BEGIN
    }
}

function getProductsEnd(products) {
    return {
        type: GET_PRODUCTS_END,
        products: products
    }
}

export function getProducts() {
    return function (dispatch) {
        dispatch(getProductsBegin())
        return fetch('https://*********************/api/products')
            .then(response => response.json())
            .then(products => dispatch(getProductsEnd(products)))
    }
}



function requestAmount() {
    return {
        type: REQUEST_AMOUNT_AT_STORE
    }
}

function receiveAmount(shops) {
    return {
        type: RECEIVE_AMOUNT_AT_STORE,
        shops: shops
    }
}

export function getAmount() {
    return function (dispatch) {
        dispatch(requestAmount)
        return fetch('https://')
            .then(response => response.json())
            .then(scores => dispatch(receiveAmount(shops)))
    }
}

export function updateScore(achievementId, score) {
    return function (dispatch) {
        return fetch('https:///' + achievementId, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                score: score
            })
        })
            .then(response => dispatch(fetchScores()))
    }
}
//shopping list



function getShoppingListBegin() {
    return {
        type: GET_PRODUCTS_BEGIN
    }
}

function getShoppingListEnd(products) {
    return {
        type: GET_PRODUCTS_END,
        products: products
    }
}

export function getShoppingList() {
    return function (dispatch) {
        dispatch(getShoppingListBegin())
        return fetch('https://*********************/api/products')
            .then(response => response.json())
            .then(products => dispatch(getShoppingListEnd(products)))
    }
}

function addProductBegin() {
    return {
        type: ADD_PRODUCT_BEGIN
    }
}

function addProductEnd(products) {
    return {
        type: ADD_PRODUCT_BEGIN,
        products: products
    }
}

export function addProduct() {
    return function (dispatch) {
        dispatch(addProductBegin())
        return fetch('https://****************/api/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Kasza Jaglana',
                price: '8 zł',
            })
        })
            .then(response => response.json())
            .then(products => dispatch(addProductEnd(products)))
    }
}

export function deleteProduct(productId) {
    return function (dispatch) {
        return fetch('https://' + productId, {
            method: 'DELETE'
        })
            .then(response => dispatch(getShoppingList))
    }
}

