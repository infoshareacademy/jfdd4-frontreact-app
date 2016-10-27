import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Product from './product/Product';
import Shops from './shops/Shops';
import Maps from './maps/Maps';


import Favorites from './favorites/Favorites';
import ShoppingList from './shoppingList/ShoppingList'
import { Provider } from 'react-redux';
import store from './store';

import Login from './login/Login';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={Dashboard} />
                <Route path="/products" component={Products}/>
                <Route path="/products/:id" component={Product}/>
                <Route path="/shops" component={Shops}/>
                <Route path="/shops/:viewVariant" component={Shops}/>
                <Route path="/maps" component={Maps}/>
                <Route path="/shoppingList" component={ShoppingList}/>
                <Route path="/favorites" component={Favorites}/>
                <Route path="/login" component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
