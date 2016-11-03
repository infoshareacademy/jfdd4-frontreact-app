import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Product from './product/Product';
import Availability from './products/availability/Availability';
import Shops from './shops/Shops';
import Maps from './maps/Maps';
import ShoppingList from './shoppingList/ShoppingList';
import { fetchProducts } from './products/actionCreators'

import Favorites from './favorites/Favorites';
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
                <Route path="/products" component={Products} />
                <Route path="/products/availability" component={Availability}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/shops" component={Shops}/>
                <Route path="/shops/:viewVariant" component={Shops} />
                <Route path="/maps" component={Maps}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/login" component={Login}/>
                <Route path="/shopping-list" component={ShoppingList}/>
                <Redirect from="*" to="/" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
