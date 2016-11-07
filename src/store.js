import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import productsReducer from './products/reducer'
import persistState from 'redux-localstorage'
import shoppingListReducer from './shoppingList/reducer'
import amountsReducer from './shoppingList/amounts/reducer'
import oldListsReducer from './shoppingList/old-lists/reducer'

import mapsReducer from './maps/reducer'
import mapProductReducer from './mapProduct/reducer'
import shopsReducer from './shops/reducer'
import searchReducer from './search/reducer'



let reducer = combineReducers({
    productsData: productsReducer,
    // favorites: productsReducer,
    mapsDate: mapsReducer,
    mapProduct:  mapProductReducer,
    shopsData: shopsReducer,
    search: searchReducer,
    amountsData: amountsReducer,
    shoppingListData: shoppingListReducer,
    oldListsData: oldListsReducer
})

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware,
        ),
        persistState(['favorites'])
    )
)

store.subscribe(() => {
    localStorage.setItem('favoriteProductIds', JSON.stringify(store.getState().productsData.favoriteProductIds || []))
})

export default store

