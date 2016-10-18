import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Shops from './shops/Shops';
import Maps from './maps/Maps';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} >
        <Route path="/products" component={Products}/>
        <Route path="/shops" component={Shops}/>
        <Route path="/maps" component={Maps}/>
  </Route>
    </Router>,
  document.getElementById('root')
);
