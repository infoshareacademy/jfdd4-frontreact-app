import { ADD_TO_FAVORITES_BEGIN, ADD_TO_FAVORITES_END, DELETE_FAVORITE_BEGIN, DELETE_FAVORITE_END } from './actionTypes'
import { addToFavorites, deleteFavorite } from '../app/actionCreators'

// const initialState = {
//     favoriteProductIds: []
// }
// //tutaj beda productsId i favoriteproductId odczytane z API
//
// export default(state = initialState, action) => {
//     switch (action.type) {
//         case MARK_PRODUCT_AS_FAVORITE:
//             return Object.assign({}, state, {
//                 favoriteProductIds: state.favoriteProductIds.concat([action.productId])
//             })
//         case DISSMARK_PRODUCT_AS_FAVORITE:
//             return Object.assign ({}, state, {
//             favoriteProductIds: state.favoriteProductIds.remove([action.productId])
//         })
//         default:
//             return state
//     }
// }

const initialState = {
    favoriteMarks: [
        {
            productId: [],
            id: []
        }
    ]
}

export default(state = initialState, action) => {
    switch (action.type) {
        case addToFavorites:
            return Object.assign({}, state, {
                favoriteMarks: state.favoriteMarks.concat([{
                    productId: action.productId,
                    id: action.id}])
            })
        case deleteFavorite:
            return Object.assign ({}, state, {
                favoriteMarks: state.favoriteMarks.filter(mark => mark.id !== action.id ? true : false)
            })
        default:
            return state
    }
}
