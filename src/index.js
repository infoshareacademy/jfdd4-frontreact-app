import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Maps from './maps/Maps';
// import FacebookLogin from './login/Login';

import './index.css';

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
             <Route path="/maps" component={Maps} />
        </Route>

    </Router>,
    document.getElementById('root')
);


