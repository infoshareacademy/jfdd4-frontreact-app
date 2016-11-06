import{ MARK_PRODUCT_AS_FAVORITE, DISSMARK_PRODUCT_AS_FAVORITE, ADD_TO_FAVORITES_BEGIN, ADD_TO_FAVORITES_END, DELETE_FAVORITE_BEGIN, DELETE_FAVORITE_END, REQUEST_FAVORITES, RECEIVE_FAVORITES } from './actionTypes'
import fetch from 'isomorphic-fetch'

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

export function addToFavorites (productId, favoriteProducts) {
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
                favoriteProducts: favoriteProducts,
                name: "BLEBLE",
            })})
            .then(response => response.json())
            .then(products => {
                dispatch(addToFavoritesEnd(productId))
                dispatch(fetchFavorites())
            })
    }
}

// export function deleteFavorite (productId, id) {
//     return function (dispatch) {
//         dispatch(deleteFavoriteBegin(id, productId))
//         return fetch('http://rest.learncode.academy/api/FrontReact2/products/' + id, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(trash => dispatch(deleteFavoriteEnd(id, productId)))
//     }
// }

export function deleteFavorite(favMarks) {
    return function (dispatch) {
        return Promise.all(
            favMarks.map(
                favMark => fetch('http://rest.learncode.academy/api/FrontReact2/products/' + favMark.id, {
                    method: 'DELETE'
                }).then(response => dispatch(fetchFavorites()))
            )
        ).then(() => dispatch(fetchFavorites()))
    }
}

function requestFavorites() {
    return {
        type: REQUEST_FAVORITES
    }
}

function receiveFavorites(favoriteProducts) {
    return {
        type: RECEIVE_FAVORITES,
        favoriteProducts: favoriteProducts
    }
}


export function fetchFavorites() {
    return function (dispatch) {
        dispatch (requestFavorites())
        return fetch('http://rest.learncode.academy/api/FrontReact2/products')
            .then(response => response.json())
            .then(favoriteProducts => dispatch(receiveFavorites(favoriteProducts)))
    }
}