import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import productsReducer from './products/reducer'
import persistState from 'redux-localstorage'
import favoritesReducer from './app/favoriteReducer'

let reducer = combineReducers({
    productsData: productsReducer,
    favorites: favoritesReducer
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
            loggerMiddleware
        ),
        persistState(['favorites'])
    )
)

store.subscribe(() => {
    localStorage.setItem('favoriteProductIds', JSON.stringify(store.getState().productsData.favoriteProductIds || []))
})

export default store