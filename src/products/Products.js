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

/*


import React from 'react'
// import {Button} from 'react-bootstrap'

export default class Students extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            filters: {
                none: function () { return true },
                kategoria: function (product) { return product.category === '....'},
                sklep: function (shop) { return product.shop === '....'}
            }
        }
    }

    render() {
        console.debug('Rendering...')
        
        return (
            <div>
                <p>
                    <button onClick={() => this.setState({activeFilter: 'none'})}
                            className={this.state.activeFilter === 'none' ? 'active': ''}>
                        wszystkie
                    </button>

                    <button onClick={() => this.setState({activeFilter: ''})}
                            className={this.state.activeFilter === '' ? 'active': ''}>
                        kategoria
                    </button>

                    <button onClick={() => this.setState({activeFilter: ''})}
                            className={this.state.activeFilter === '' ? 'active': ''}>
                        sklep
                    </button>


                </p>
                <h1>Produkty</h1>
                <ul>
                    {filteredProdukts.map(
                        function (produkt) {
                            return <li key={produkt.id}>{produkt.name}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}
*/
