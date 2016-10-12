import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Products from './products/Products';
import Shops from './shops/Shops'

import { Router, Route, Link, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/products" component={Products}/>
        <Route path="/shops" component={Shops}/>
  </Router>,
  document.getElementById('root')
);
