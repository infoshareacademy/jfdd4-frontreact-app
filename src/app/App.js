import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu';
import Content from './Content'


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

