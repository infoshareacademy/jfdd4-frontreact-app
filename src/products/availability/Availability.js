/**
 * Created by karol on 19.10.16.
 */
import React from 'react'
import './Availability.css'
import {finalState} from '../../data/dataProducts'
import showShop from 'showShop/showShop'

export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            shops: []
        }
    }


    componentWillMount() {
        var context = this;
        context.setState({products: finalState.products}),
        context.setState({shops: finalState.shops})

    }

    render() {

        return (
            <div>
                <h1>Produkty</h1>
                <div id="ww">{this.state.products.map(function (products) {
                    return <button id="B" key={products.id}>
                        {products.name}
                    </button>
                })}
                </div>
                <showShop>
                    
                </showShop>
                
        )
    }
}
