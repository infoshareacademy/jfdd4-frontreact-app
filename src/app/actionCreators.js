import{ MARK_PRODUCT_AS_FAVORITE, DISSMARK_PRODUCT_AS_FAVORITE, ADD_TO_FAVORITES_BEGIN, ADD_TO_FAVORITES_END, ADD_SHOP_TO_FAVORITES_BEGIN } from './actionTypes'

export function markProductAsFavorite(productId) {
    return {
        type: MARK_PRODUCT_AS_FAVORITE,
        productId: productId
    }
}
//ajax tutaj robiony/ zrobic dwa actioncreatory - zaczyanam dodawc ulubione/zakonczylem dodawanie ulubionych

export function dissmarkProductAsFavorite(productId) {
    return {
        type: DISSMARK_PRODUCT_AS_FAVORITE,
        productId: productId
    }
}

function addToFavoritesBegin (productId) {
    return {
        type: ADD_TO_FAVORITES_BEGIN,
        productId: productId
    }
}

function addToFavoritesEnd (productId) {
    return {
        type: ADD_TO_FAVORITES_END,
        productId: productId
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
        type: ADD_TO_FAVORITES_BEGIN,
        shopId: shopId
    }
}

export function addToFavorites (productId) {
    return function (dispatch) {
        dispatch(addToFavoritesBegin(productId))
        return fetch()
            .then(response => response.json())
            .then(products => dispatch(addToFavoritesEnd(productId)))
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