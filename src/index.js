import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import Products from './products/Products';
import Shops from './shops/Shops';
import Maps from './maps/Maps';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/products" component={Products}/>
        <Route path="/shops" component={Shops}/>
        <Route path="/maps" component={Maps}/>
  </Router>,
  document.getElementById('root')
);
