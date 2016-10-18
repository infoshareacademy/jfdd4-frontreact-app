import React from 'react'
import { finalState } from '../data/dataShops'
import { markShopAsFavorite, getFavoriteShops } from'../Favorites/favoriteShops'

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: finalState.shops
        }
    }


    componentWillMount() {

    }

    render() {
        var favourites = getFavoriteShops();
        var forceUpdate = this.forceUpdate.bind(this);
        console.log(favourites);
        return (
            <ul>
                <h1>Shops</h1>
                {this.state.shops.map(function (shop) {
                    return (
                        <li className={favourites.find(shopId => shopId === shop.id) ? 'favourite' : ''} key={shop.id}>
                            {shop.id}
                            {shop.name}
                            {shop.location.lat}
                            {shop.location.lng}
                            {shop.opened}
                            <button onClick={() => {markShopAsFavorite(shop);forceUpdate()}}>Ulubione</button>
                        </li>
                    )
                })}
            </ul>
        )
    }

}
