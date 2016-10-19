/**
 * Created by karol on 19.10.16.
 */
import React from 'react'

import {finalState} from '/data/dataProducts'

export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }


    componentWillMount() {
        var context = this;
        context.setState({products: finalState.products})
    }

    render() {

        return (
            <div>
                <h1>Produkty</h1>
                <button>{this.state.products.map(function (products) {
                    return <div key={products.id}> {products.name}> </div>
                })}
                </button>
            </div>
        )
    }
}

