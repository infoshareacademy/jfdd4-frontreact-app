import React from 'react'
import products from '../data/dataProducts'
import {Button} from 'react-bootstrap'


export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            filters: {
                none: function () {
                    return true
                },
                kategoria: function (product) {
                    return product.Category === 'Category'
                },
                sklep: function (product) {
                    return product.Shops === 'Shops'
                },
                cena: function (product) {
                    return product.Price === 'Price'
                }
            }
        }
    }


componentWillMount() {
}

render() {
    console.debug('Rendering...');
    var isLoading = this.state.isLoading,
        allProducts = this.state.products,
        allFilters = this.state.filters,
        activeFilterName = this.state.activeFilter,
        selectedFilter = allFilters[activeFilterName],
        filteredProducts = allProducts.filter(selectedFilter);
    return (
        <div>
            <div>
                <button onClick={() => this.setState({activeFilter: 'none'})}
                        className={this.state.activeFilter === 'none' ? 'active': ''}>
                    wszystkie
                </button>

                <button onClick={() => this.setState({activeFilter: 'kategoria'})}
                        className={this.state.activeFilter === '' ? 'active': ''}>
                    kategoria
                </button>

                <button onClick={() => this.setState({activeFilter: 'sklep'})}
                        className={this.state.activeFilter === '' ? 'active': ''}>
                    sklep
                </button>
                <button onClick={() => this.setState({activeFilter: 'cena'})}
                        className={this.state.activeFilter === '' ? 'active': ''}>
                    cena
                </button>

            </div>
            {/*<h1>Produkty</h1>*/}
            <ul>
                {products.map(function (products) {
                    return <li>{products.ID}{products.Name}{products.Price}{products.Shops}</li>
                })}
            </ul>
        </div>
        )
    }
}
