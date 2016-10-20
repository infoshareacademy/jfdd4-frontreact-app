import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import Content from './Content'
import { Jumbotron } from 'react-bootstrap'



class App extends Component {

    render() {
        return (
            <div>
                <Menu />
                <Content layout={this.props.children} />
            </div>
        );
    }
}

export default App;

