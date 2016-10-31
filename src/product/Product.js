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
import { Glyphicon, Grid, Col, Row, Image } from 'react-bootstrap'
import ButtonBack  from './button/ButtonBack'


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

        return (

            <div>
                    <div>&#x2002;</div>
                     <div>
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
                                        <div className="product polaroid">
                                            <Row>
                                                <Col className="card-content" xs={12} sm={3} md={3} lg={3}>
                                                        <Image className ="img-responsive" src={product.image}/>
                                                </Col>
                                                <Col Col xs={12} sm={9} md={9} lg={9}>
                                                    <div className="card-content">
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">
                                                                <span className="product-left-side">NAZWA</span>
                                                                <span className="product-right-side">{product.name}</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <span className="product-left-side">OPIS</span>
                                                                <span className="product-right-side">{product.description}</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <span className="product-left-side">CENA</span>
                                                                <span className="product-right-side">{product.price} zł</span>
                                                            </li>
                                                            <li className="list-group-item">
                                                                <span className="product-left-side">DOSTĘPNOŚĆ</span>
                                                                <span className="product-right-side"  key={product.id}>
                                                                    {finalShopsState
                                                                        .shops
                                                                        .filter(
                                                                            shop =>
                                                                            product.shops.indexOf(shop.id) !== -1
                                                                        )
                                                                        .map(
                                                                            shop => <td>{shop.name}&nbsp;</td>
                                                                        )
                                                                    }
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                                <Col Col xs={12} sm={12} md={12} lg={12}>
                                                    <h1>MAPA</h1>
                                                </Col>
                                            </Row>

                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                <Link to={'/products'}>
                    <ButtonBack />
                </Link>
            </div>

        )
    }
}

