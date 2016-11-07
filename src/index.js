import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Product from './product/Product';
import Shops from './shops/Shops';
import Maps from './maps/Maps';
import MapProduct from './mapProduct/MapProduct';
import MapShops from './mapAllShops/Maps';
import ShoppingList from './shoppingList/ShoppingList';
import { fetchProducts } from './products/actionCreators'
import { fetchFavorites } from './app/actionCreators'

import { fetchCoordinate } from './mapProduct/actionCreators'

import { fetchMaps } from './maps/actionCreators'

import {fetchAmounts} from './shoppingList/amounts/actionCreators'
import {fetchList} from './shoppingList/old-lists/actionCreators'
import {fetchItems} from './shoppingList/actionCreators'

import Availability from'./products/availability/Availability.js'
import Favorites from './favorites/Favorites';
import Amounts from './shoppingList/amounts/Amounts'
import OldLists from './shoppingList/old-lists/OldLists'
import { Provider } from 'react-redux';
import store from './store';

import Login from './login/Login';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';





ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} onEnter={() => store.dispatch(fetchProducts())}>
                <IndexRoute component={Dashboard} />
                <Route path="/products" component={Products} onEnter={() => store.dispatch(fetchFavorites())}/>
                <Route path="/products/availability" component={Availability}/>
                <Route path="/products/:id" component={Product} onEnter={() => {store.dispatch(fetchAmounts(store.getState().amountsData.amounts))}}/>
                <Route path="/shops" component={Shops}/>
                <Route path="/shops/:viewVariant" component={Shops}/>
                <Route path="/maps" component={MapShops}/>
                <Route path="/products/map/:id" component={MapProduct} onEnter={() => store.dispatch(fetchCoordinate())}/>
                <Route path="/shoppingList" component={ShoppingList} onEnter={() => {
                    store.dispatch(fetchItems(store.getState().shoppingListData.items))
                    store.dispatch(fetchList(store.getState().oldListsData.list))
                    }}/>
                <Route path="/amounts/:productId" component={Amounts} onEnter={() => {store.dispatch(fetchAmounts(store.getState().amountsData.amounts))}}/>
                <Route path="/old-lists" component={OldLists} onEnter={() => {store.dispatch(fetchList(store.getState().oldListsData.list))}}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/login" component={Login}/>
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
