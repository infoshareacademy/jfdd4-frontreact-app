import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Maps from './maps/Maps0';
import Login from './login/Login';

import './index.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/maps" component={Maps} />
        <Route path="/login" component={Login} />
    </Router>,
    document.getElementById('root')
);


