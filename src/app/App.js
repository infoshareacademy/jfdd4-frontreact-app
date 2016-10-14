import React, { Component } from 'react';
import './App.css';
import Menu from './menu/Menu'

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>
                    <Menu />
                </p>
                <div className="App-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;

