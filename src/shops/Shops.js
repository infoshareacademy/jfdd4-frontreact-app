import React from 'react'
import { Well, Glyphicon, PageHeader, Table, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { markShopAsFavorite, getFavoriteShops, dissMarkShopAsFavorite } from'../marketFavorites/favoriteShops'
import {
    initialState as initialShopsState,
    finalState as finalShopsState
} from '../data/dataShops'
import {
    initialState as initialProductsState,
    finalState as finalProductsState
} from '../data/dataProducts'
import { Link } from 'react-router'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    shops: state.shopsData.shops,
    fetchingShops: state.shopsData.fetchingShops
})

 class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            productsData: initialProductsState
        }
    }

    componentWillMount() {
        var context = this;
        context.setState({productsData: finalProductsState})

    }

    render() {
        var
            favourites = getFavoriteShops(),
            forceUpdate = this.forceUpdate.bind(this),
            productsData = this.state.productsData,
            viewVariant = this.props.params.viewVariant,
            shops = this.props.shops;


        // console.log(this.props.params.viewVariant);
        // console.log(productsData.products);
        // console.log(this.state.shops);

        return (
            <div>
                <Well>
                <PageHeader>Lista sklepów
                    <small> dodaj lub usuń sklepy z obserwowanych.</small></PageHeader>
                    <p>
                        <Link to={'/shops/with-products'}>
                            {this.props.children}
                            <Button bsStyle="primary">Pokaż dostępne produkty</Button>
                        </Link>
                        <Link to={'/shops'}>
                            {this.props.children}
                        <Button bsStyle="primary">Pokaż wszystkie sklepy</Button>
                        </Link>
                    </p>
                <Table striped bordered condensed hover>
                    <thead>
                    </thead>
                    <ReactCSSTransitionGroup
                        component="tbody"
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    {shops.map(function (shop) {
                        return (
                            <tr className={favourites.find(shopId => shopId === shop.id) ? 'favourite' : ''} key={shop.id}>
                                    <td>{shop.name}</td>

                                <Button bsStyle="success" onClick={() => {markShopAsFavorite(shop); forceUpdate(); alert("Dodano sklep do ulubionych")}}><Glyphicon glyph="glyphicon glyphicon-ok" aria-hidden="true"/></Button>
                                <Button bsStyle="danger" onClick={() => {dissMarkShopAsFavorite(shop);forceUpdate(); alert("Usunięto sklep z ulubionych")}}><Glyphicon glyph="glyphicon glyphicon-remove" aria-hidden="true"/></Button>
                                {viewVariant === 'with-products' ?
                                    <ul>
                                        {productsData.products.filter(function (product) {
                                            for( var i = 0; i < product.shops.length; i++ ){
                                                if (product.shops[i] === shop.id) {
                                                    return true;
                                                }
                                            }
                                            return false;
                                        }).map(function(product) {
                                            return (
                                                <tr key={product.id}><Glyphicon glyph="glyphicon glyphicon-ok" aria-hidden="true"/>
                                                    <td>{product.name}</td><Glyphicon glyph="glyphicon glyphicon-remove" aria-hidden="true"/>
                                                </tr>
                                            )
                                        })
                                        }
                                    </ul> : null}
                            </tr>
                        )
                    })}
                    </ReactCSSTransitionGroup>
                </Table>
                    </Well>
            </div>
        )
    }

}


export default connect(mapStateToProps)(Shops)