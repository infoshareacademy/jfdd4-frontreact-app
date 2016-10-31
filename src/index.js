import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Product from './product/Product';
import Shops from './shops/Shops';
import Maps from './maps/Maps';
import ShoppingList from './shoppingList/ShoppingList';
import { fetchProducts } from './products/actionCreators'
import {fetchAmounts} from './shoppingList/amounts/actionCreators'
import Availability from'./products/availability/Availability.js'
import Favorites from './favorites/Favorites';
import Number from './shoppingList/number/Number'
import Amounts from './shoppingList/amounts/Amounts'
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
            <Route path="/" component={App} >
                <IndexRoute component={Dashboard} />
                <Route path="/products" component={Products} onEnter={() => store.dispatch(fetchProducts())}/>
                <Route path="/products/availability" component={Availability}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/shops" component={Shops}/>
                <Route path="/shops/:viewVariant" component={Shops}/>
                <Route path="/maps" component={Maps}/>
                <Route path="/shoppingList" component={ShoppingList} onEnter={() => {store.dispatch(fetchAmounts())}}/>
                    <Route path="/shoppingList/number" component={Number}/>
                    <Route path="/shoppingList/amounts" component={Amounts} onEnter={() => store.dispatch(fetchAmounts(store.getState().amountsData.amounts))}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/login" component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
