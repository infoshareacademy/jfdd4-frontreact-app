import React, {Component} from 'react';
import './Content.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'react-bootstrap'

export default class Content extends Component {
    render(){
        return (
            <div className="container-fluid">{this.props.layout}</div>
        );
    }
}