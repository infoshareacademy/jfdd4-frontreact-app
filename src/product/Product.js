import React, { Component } from 'react';
import {
    initialState as initialProductsState,
    finalState as finalProductsState
} from '../data/dataProducts'
import {
    initialState as initialShopsState,
    finalState as finalShopsState
} from '../data/dataShops'
import { Link } from 'react-router'
import { Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'


export default class Product extends React.Component {
    constructor() {
        super()

        this.state = {
            products: finalProductsState.products,
            productsData: initialProductsState
        }
    }

    componentWillMount() {
        var context = this;
        context.setState({productsData: finalProductsState}),
            context.setState({products: finalProductsState.products}),
        context.setState({shops: finalShopsState.shops})
    }

    render(){
        var productsData = this.state.productsData,
            productData = this.props.params,
            productId = this.props.params.id,
            allProducts = this.state.products;

        console.log(this.state.products);
        console.log(productsData.products);

        return (
            <div>
                <Well>
                     <ul >
                        {productsData.products
                            .filter(
                                function(product) {
                                    if(productId == product.id){
                                      return  true
                                    }
                                }
                            )
                            .map(
                                function (product) {
                                    return (
                                        <table class="table">
                                            <tr>
                                                <td>Id</td>
                                                <td>{productId}</td>
                                            </tr>
                                            <tr>
                                                <td>Nazwa</td>
                                                <td>{product.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Opis</td>
                                                <td>{product.description}</td>
                                            </tr>
                                            <tr>
                                                <td>Cena</td>
                                                <td>{product.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Dostępność</td>
                                                <td  key={product.id}>
                                                    {finalShopsState
                                                        .shops
                                                        .filter(
                                                            shop =>
                                                            product.shops.indexOf(shop.id) !== -1
                                                        )
                                                        .map(
                                                            shop => <td> {shop.name} </td>
                                                        )
                                                    }
                                                </td>
                                            </tr>
                                        </table>

                                    )
                                }
                            )
                        }
                    </ul>
                    </Well>
                <Link to={'/products'}>
                    <Button>Powrót do listy produktów</Button>
                </Link>
            </div>

        )
    }
}



