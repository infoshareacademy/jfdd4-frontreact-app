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

function receiveAmount(products) {
    return {
        type: RECEIVE_AMOUNT_AT_STORE,
        products: products
    }
}

export function getAmount() {
    return function (dispatch) {
        dispatch(requestAmount)
        return fetch('${process.env.PUBLIC_URL}/data/dataProducts.json')
            .then(response => response.json())
            .then(products => dispatch(receiveAmount(products)))
    }
}

export function updateShopAmount(amountId, score) {
    return function (dispatch) {
        return fetch('https:///' + amountId, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                products: products
            })
        })
            .then(response => dispatch(getAmount()))
    }
}
//shopping list
//
//
//
// function getShoppingListBegin() {
//     return {
//         type: GET_PRODUCTS_BEGIN
//     }
// }
//
// function getShoppingListEnd(products) {
//     return {
//         type: GET_PRODUCTS_END,
//         products: products
//     }
// }
//
// export function getShoppingList() {
//     return function (dispatch) {
//         dispatch(getShoppingListBegin())
//         return fetch('https://*********************/api/products')
//             .then(response => response.json())
//             .then(products => dispatch(getShoppingListEnd(products)))
//     }
// }
//
// function addProductBegin() {
//     return {
//         type: ADD_PRODUCT_BEGIN
//     }
// }
//
// function addProductEnd(products) {
//     return {
//         type: ADD_PRODUCT_BEGIN,
//         products: products
//     }
// }
//
// export function addProduct() {
//     return function (dispatch) {
//         dispatch(addProductBegin())
//         return fetch('https://****************/api/products', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 name: 'Kasza Jaglana',
//                 price: '8 zł',
//             })
//         })
//             .then(response => response.json())
//             .then(products => dispatch(addProductEnd(products)))
//     }
// }
//
// export function deleteProduct(productId) {
//     return function (dispatch) {
//         return fetch('https://' + productId, {
//             method: 'DELETE'
//         })
//             .then(response => dispatch(getShoppingList))
//     }
// }
//
