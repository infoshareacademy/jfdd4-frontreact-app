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
import { Well, Glyphicon, PageHeader, Table, Button, Grid, Col, Row, Image } from 'react-bootstrap'



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
                    <div>&#x2002;</div>
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
                                        <div>
                                            <Image responsive className ="img-responsive" src={product.image}/>
                                                <Table striped bordered condensed hover responsive>
                                                    <tbody>
                                                        <tr>
                                                            <td>Id</td>
                                                            <td>{productId}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Nazwa</td>
                                                            <td>{product.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan="1">Opis</td>
                                                            <Col responsive colSpan="2">{product.description}</Col>
                                                        </tr>
                                                        <tr>
                                                            <td>Cena</td>
                                                            <td>{product.price} zł</td>
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
                                                                        shop => <td>{shop.name}&nbsp;</td>
                                                                    )
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                        </div>
                                    )
                                }
                            )
                        }
                    </ul>
                <Link to={'/products'}>
                    <Button  bsStyle="primary">Powrót do listy produktów</Button>
                </Link>
            </div>

        )
    }
}


// <div>
//     <Well>
//         <div>&#x2002;</div>
//         <ul >
//             {productsData.products
//                 .filter(
//                     function(product) {
//                         if(productId == product.id){
//                             return  true
//                         }
//                     }
//                 )
//                 .map(
//                     function (product) {
//                         return (
//                             <div>
//                                 <Image responsive className ="img-responsive" src={product.image}/>
//                                 <Table striped bordered condensed hover responsive>
//                                     <tbody>
//                                     <tr>
//                                         <td>Id</td>
//                                         <td>{productId}</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Nazwa</td>
//                                         <td>{product.name}</td>
//                                     </tr>
//                                     <tr>
//                                         <td colSpan="1">Opis</td>
//                                         <Col responsive colSpan="2">{product.description}</Col>
//                                     </tr>
//                                     <tr>
//                                         <td>Cena</td>
//                                         <td>{product.price} zł</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Dostępność</td>
//                                         <td  key={product.id}>
//                                             {finalShopsState
//                                                 .shops
//                                                 .filter(
//                                                     shop =>
//                                                     product.shops.indexOf(shop.id) !== -1
//                                                 )
//                                                 .map(
//                                                     shop => <td>{shop.name}&nbsp;</td>
//                                                 )
//                                             }
//                                         </td>
//                                     </tr>
//                                     </tbody>
//                                 </Table>
//                             </div>
//                         )
//                     }
//                 )
//             }
//         </ul>
//     </Well>
//     <Link to={'/products'}>
//         <Button  bsStyle="primary">Powrót do listy produktów</Button>
//     </Link>
// </div>


