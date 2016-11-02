import { MARK_PRODUCT_AS_FAVORITE, DISSMARK_PRODUCT_AS_FAVORITE } from './actionTypes'

const initialState = {
    favoriteProductIds: []
    
}
//tutaj beda productsId i favoriteproductId odczytane z API

export default(state = initialState, action) => {
    switch (action.type) {
        case MARK_PRODUCT_AS_FAVORITE:
            return Object.assign({}, state, {
                favoriteProductIds: state.favoriteProductIds.concat([action.productId])
            })
        case DISSMARK_PRODUCT_AS_FAVORITE:
            return Object.assign ({}, state, {
            favoriteProductIds: state.favoriteProductIds.remove([action.productId])
        })
        
        default:
            return state
    }
}