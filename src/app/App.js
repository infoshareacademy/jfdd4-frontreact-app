import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>
                    <Link to={`/products`}>Products</Link>
                    <br />
                    <Link to={`/shops`}>Shops</Link>
                    <br />
                    <Link to={`/maps`}>Maps</Link>
                </p>
                {this.props.children}
            </div>
        );
    }
}

export default App;

