import React from 'react'
import products from '../data/dataProducts'

// export default (props) => <h1>Products</h1>

export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }


componentWillMount() {

}

render() {
    return (
        <ul>
            <h1>Products</h1>
            {products.map(function (products) {
                return <li>{products.ID}{products.Name}{products.Price}{products.Shops}</li>
            })}
        </ul>
    )
}

}
