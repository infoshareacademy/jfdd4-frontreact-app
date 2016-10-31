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


//
// <div>
//     {products
//         .filter(activeFilter.predicate)
//         .map(product => (
//             <ul key={product.id}>
//                 <div>
//                     <Col xs={10} sm={6} md={4} lg={3} key={product.id} >
//                         <div className="card product polaroid">
//                             <li  className="card-header">
//                                 PRODUKT
//                             </li>
//                             <div className="card-image">
//                                 <Image responsive className="card-img-top size" src={product.image}/>
//                                 <ButtonAddToList />
//                             </div>
//                             <div className="card-content">
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item">
//                                         <span className="left-side">NAZWA</span>
//                                         <span className="right-side">{product.name}</span>
//                                     </li>
//                                     <li className="list-group-item">
//                                         <span className="left-side">KATEGORIA</span>
//                                         <span className="right-side">{product.category}</span>
//                                     </li>
//                                     <li className="list-group-item">
//                                         <span className="left-side">CENA</span>
//                                         <span className="right-side">{product.price}&ensp;zł</span>
//                                     </li>
//                                     <li className="list-group-item">
//                                         <div className="card-block">
//                                              <span className="icon-left">
//                                                  <ButtonAddToFavorite onClick={() => addToFavorites(product.id)} />
//                                              </span>
//                                             <span className="icon-center">
//                                                 <ButtonShowOnMap />
//                                              </span>
//                                             <span className="icon-right">
//                                                 <Link to={"/products/" + product.id}>
//                                                     <ButtonMoreInformation />
//                                                 </Link>
//                                              </span>
//                                             {/*<button onClick={() => addToFavorites(product.id)}>*/}
//                                             {/*Add favorites*/}
//                                             {/*</button>*/}
//                                             {/*<button onClick={() => dissmarkProduct(product.id)}>*/}
//                                             {/*Del favorites*/}
//                                             {/*</button>*/}
//                                         </div>
//
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </Col>
//                 </div>
//             </ul>
//         ))}
// </div>

//
// <div>
// <div>&#x2002;</div>
// <ul >
//     {productsData.products
//         .filter(
//             function(product) {
//                 if(productId == product.id){
//                     return  true
//                 }
//             }
//         )
//         .map(
//             function (product) {
//                 return (
//                     <div>
//                         <Image responsive className ="img-responsive" src={product.image}/>
//                         <Table striped bordered condensed hover responsive>
//                             <tbody>
//                             <tr>
//                                 <td>Id</td>
//                                 <td>{productId}</td>
//                             </tr>
//                             <tr>
//                                 <td>Nazwa</td>
//                                 <td>{product.name}</td>
//                             </tr>
//                             <tr>
//                                 <td colSpan="1">Opis</td>
//                                 <Col responsive colSpan="2">{product.description}</Col>
//                             </tr>
//                             <tr>
//                                 <td>Cena</td>
//                                 <td>{product.price} zł</td>
//                             </tr>
//                             <tr>
//                                 <td>Dostępność</td>
//                                 <td  key={product.id}>
//                                     {finalShopsState
//                                         .shops
//                                         .filter(
//                                             shop =>
//                                             product.shops.indexOf(shop.id) !== -1
//                                         )
//                                         .map(
//                                             shop => <td>{shop.name}&nbsp;</td>
//                                         )
//                                     }
//                                 </td>
//                             </tr>
//                             </tbody>
//                         </Table>
//                     </div>
//                 )
//             }
//         )
//     }
// </ul>
// <Link to={'/products'}>
//     <ButtonBack />
//     </Link>
//     </div>




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


