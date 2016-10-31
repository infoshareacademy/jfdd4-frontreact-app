import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import  shoppingListReducer from './shoppingList/reducer'
import amountsReducer from './shoppingList/amounts/reducer'

// let reducer = combineReducers({
//     shoppingList: shoppingListReducer
// })

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducer = combineReducers({
    amountsData: amountsReducer
    // : shoppingListReducer
})


let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            loggerMiddleware
        ),
      )
)

export default store