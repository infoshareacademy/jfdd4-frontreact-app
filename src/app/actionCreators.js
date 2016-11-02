import{ MARK_PRODUCT_AS_FAVORITE, DISSMARK_PRODUCT_AS_FAVORITE, ADD_TO_FAVORITES_BEGIN, ADD_TO_FAVORITES_END, DELETE_FAVORITE_BEGIN, DELETE_FAVORITE_END } from './actionTypes'

export function markProductAsFavorite(productId) {
    return {
        type: MARK_PRODUCT_AS_FAVORITE,
        productId: productId
    }
}

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

function deleteFavoriteBegin (id, productId) {
    return {
        type: DELETE_FAVORITE_BEGIN,
        id: id,
        productId: productId
    }
}

function deleteFavoriteEnd (id, productId) {
    return {
        type: DELETE_FAVORITE_END,
        id: id,
        productId: productId
    }
}



export function addToFavorites (productId) {
    return function (dispatch) {
        dispatch(addToFavoritesBegin(productId))
        return fetch("http://rest.learncode.academy/api/FrontReact2/products", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId: productId,
            })})
            .then(response => response.json())
            .then(products => dispatch(addToFavoritesEnd(productId)))
    }
}

export function deleteFavorite (productId, id) {
    return function (dispatch) {
        dispatch(deleteFavoriteBegin(id, productId))
        return fetch('http://rest.learncode.academy/api/FrontReact2/products/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(trash => dispatch(deleteFavoriteEnd(id, productId)))
    }
}