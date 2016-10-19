import React from 'react'
import { markShopAsFavorite, getFavoriteShops } from'../marketFavorites/favoriteShops'
import {
    initialState as initialShopsState,
    finalState as finalShopsState
} from '../data/dataShops'
import {
    initialState as initialProductsState,
    finalState as finalProductsState
} from '../data/dataProducts'
import { Link } from 'react-router'

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: finalShopsState.shops,


            shopsData: initialShopsState,
            productsData: initialProductsState
        }
    }

    componentWillMount() {
        setTimeout(function () {
            this.setState({
                shopsData: finalShopsState
            })
        }.bind(this), 0)
        
        setTimeout(function () {
            this.setState({
                productsData: finalProductsState
            })
        }.bind(this), 0)
    }
    

    render() {
        var
            favourites = getFavoriteShops(),
            forceUpdate = this.forceUpdate.bind(this),
            shopsData = this.state.shopsData,
            productsData = this.state.productsData,
            viewVariant = this.props.params.viewVariant;

        console.log(this.props.params.viewVariant);

        return (
            <div>
                <h1>Sklepy</h1>
                <p>
                    <Link to={'/shops/with-products'}>
                        {this.props.children}
                        <button>Pokaż dostępne produkty</button>
                    </Link>

                    <button >Pokaż wszystkie sklepy</button>

                </p>
                <ul>
                    {this.state.shops.map(function (shop) {
                        return (
                            <li className={favourites.find(shopId => shopId === shop.id) ? 'favourite' : ''} key={shop.id}>
                                {shop.id}
                                {shop.name}
                                {<button onClick={() => {markShopAsFavorite(shop); forceUpdate()}}>Ulubione</button>}
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
                                                <li  key={product.id}>
                                                    {product.name}

                                                </li>
                                            )
                                        })
                                        }
                                    </ul> : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// {this.state.shops.map(function (shop) {
//     return (
//         <ul>
//             <li className={favourites.find(shopId => shopId === shop.id) ? 'favourite' : ''} key={shop.id}>
//                 {shop.id}
//                 {shop.name}
//                 {shop.location.lat}
//                 {shop.location.lng}
//                 {shop.opened}
//                 <button onClick={() => {markShopAsFavorite(shop); forceUpdate()}}>Ulubione</button>
//             </li>
//         </ul>
//     )
// })}

