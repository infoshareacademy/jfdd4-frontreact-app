import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Availability from './products/availability/Availability';
import Shops from './shops/Shops';
import Maps from './maps/Maps';
import Commute from './maps/commute/Commute';

import Favorites from './favorites/Favorites';
import Login from './login/Login';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
        <IndexRoute component={Dashboard} />
        <Route path="/products" component={Products}/>
            <Route path="/products/availability" component={Availability}/>
        <Route path="/shops" component={Shops}/>
        <Route path="/shops/:viewVariant" component={Shops}/>
        <Route path="/maps" component={Maps}/>
            <Route path="/maps/commute" component={Commute}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/login" component={Login}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
