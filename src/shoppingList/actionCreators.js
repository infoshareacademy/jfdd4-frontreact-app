import {ADD_PRODUCT_BEGIN, ADD_PRODUCT_END, GET_PRODUCTS_BEGIN, GET_PRODUCTS_END} from './actionTypes'
import fetch from 'isomorphic-fetch'

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
