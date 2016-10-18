import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Shops from './shops/Shops';
import Maps from './maps/Maps';
import Favorites from './favorites/Favorites';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'




ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
        <IndexRoute component={Dashboard} />
        <Route path="/products" component={Products}/>
        <Route path="/shops" component={Shops}/>
        <Route path="/maps" component={Maps}/>
        <Route path="/favorites" component={Favorites}/>

    </Route>
  </Router>,
  document.getElementById('root')
);
