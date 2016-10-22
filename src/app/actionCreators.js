import{ MARK_PRODUCT_AS_FAVORITE, DISSMARK_PRODUCT_AS_FAVORITE } from './actionTypes'

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