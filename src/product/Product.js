import React, {Component} from 'react';
import {Link} from 'react-router'
import {Glyphicon, Grid, Col, Row, Image} from 'react-bootstrap'
import ButtonBack  from './button/ButtonBack'
import GoogleMap from 'google-map-react'
import Map from '../maps/Maps'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.productsData.products,
    fetchingProducts: state.productsData.fetchingProducts,
    shops: state.shopsData.shops,

})

class Product extends React.Component {
    render() {
        var {
            fetchingProducts,
            fetchingShops,
            products,
            shops,
            params,
        } = this.props

        var productsList = [
            'Oliwa z oliwek 500 ml', 'Olej kokosowy 1 kg', 'Makaron Razowy 500 g',
            'Ryż Basmati 500 g', 'Tatar z łososia 125 g', 'Chleb gryczany 500 g',
            'Tuńczyk 1 kg', 'Łosos Norweski 1 kg', 'Morele Suszone 500 g'
        ];
        var rand = productsList[Math.floor(Math.random() * productsList.length)];
        return (

            <div>
                <div style={{height: '20px'}}>&#x2002;</div>
                <div>
                    {products
                        .filter(
                            function (product) {
                                if (params.id == product.id) {
                                    return true
                                }
                            }
                        )
                        .map(
                            function (product) {
                                return (
                                    <div className="product polaroid">
                                        <Row>
                                            <Col className="card-content" xs={12} sm={3} md={3} lg={3}>
                                                <Image className="img-responsive" src={product.image}/>
                                            </Col>
                                            <Col className="card-content-right" xs={12} sm={9} md={9} lg={9}>
                                                <div className="card-content">
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">
                                                            <span className="product-left-side">NAZWA</span>
                                                            <span className="product-right-side">{product.name}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <span className="product-left-side">OPIS</span>
                                                            <span
                                                                className="product-right-side">{product.description}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <span className="product-left-side">CENA</span>
                                                            <span className="product-right-side">{product.price}
                                                                zł</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <span className="product-left-side">DOSTĘPNOŚĆ</span>
                                                            <span className="product-right-side" key={product.id}>
                                                                    {shops
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
                                                        <li className="list-group-item">


                                                            <span className="product-left-side">INNI KUPILI RÓWNIEŻ:</span>
                                                            <span className="product-right-side">{rand}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col Col xs={12} sm={12} md={12} lg={12}>
                                                <div>
                                                    <Map productId={product.id} />
                                                </div>
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

export default connect(mapStateToProps)(Product)
