

import { REQUEST_SHOPS, RECEIVE_SHOPS } from './actionTypes'
import fetch from 'isomorphic-fetch'


import{  ADD_SHOP_TO_FAVORITES_BEGIN, ADD_SHOP_TO_FAVORITES_END } from './actionTypes'





function requestShops () {
    return {
        type: REQUEST_SHOPS
    }
}

function receiveShops (shops) {
    return {
        type: RECEIVE_SHOPS,
        shops: shops
    }
}

export function fetchShops () {
    return function (dispatch) {
        dispatch(requestShops())
        return fetch(`${process.env.PUBLIC_URL}/data/shops.json`)
            .then(response => response.json())
            .then(shops => dispatch(receiveShops(shops)))
    }
}






function addShopToFavoritesBegin (shopId) {
    return {
        type: ADD_SHOP_TO_FAVORITES_BEGIN,
        shopId: shopId
    }
}
function addShopToFavoritesEnd (shopId) {
    return {
        type: ADD_SHOP_TO_FAVORITES_END,
        shopId: shopId
    }

}

export function addToFavoritesShops (shopId) {
    return function (dispatch) {
        dispatch(addShopToFavoritesBegin(shopId))
        return fetch()
            .then(response => response.json())
            .then(shops => dispatch(addShopToFavoritesEnd(shopId)))
    }
}

