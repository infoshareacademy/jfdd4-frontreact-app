import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import  shoppingListReducer from './shoppingList/reducer'
import  {reducer as putterReducer} from './shoppingList/putter'
import persistState from 'redux-localstorage'

let reducer = combineReducers({
    putter: putterReducer,
    shoppingList: shoppingListReducer
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
        persistState('putter')
    )
)

export default store