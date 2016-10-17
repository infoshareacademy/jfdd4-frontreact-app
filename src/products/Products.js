
import React from 'react'
import {initialState, finalState} from '../data/dataProducts'
import {Button} from 'react-bootstrap'


export default class Products extends React.Component {
    constructor() {
        super()

        this.state = finalState
    }

    render() {
        return (
            <div>
                <h1>Produkty</h1>
                <ul>

                    {this.state.products.map(
                        function (product) {
                            return <li key={product.ID}>{product.Name}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}

