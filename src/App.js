import React, { Component } from 'react';
import './App.css';
import './maps/Maps'
import {Link} from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <p>
                    <Link to={'/shops'}>
                        Sklepy
                    </Link>
                </p>
                <p>
                    <Link to={'/products'}>
                        Produkty
                    </Link>
                </p>
                <p>
                    <Link to={'/maps'}>
                        Mapy
                    </Link>
                </p>
                {this.props.children}
            </div>
        )
    }
}

export default App;
