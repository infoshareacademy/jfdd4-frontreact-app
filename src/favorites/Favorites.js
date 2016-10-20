import React from 'react'
import DataShops from '../data/dataShops'
import {finalState} from '../data/dataProducts'
import DataProducts from '../data/dataProducts'
import { Well } from 'react-bootstrap'

function getFavoriteShops() {
    return JSON.parse(localStorage.getItem('favoriteShops')) || []
}
function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || []
}


export default class Favorites extends React.Component {
    render() {
        var prop = this.props;

        var favShopsIds = getFavoriteShops();
        var favProductsIds = getFavoriteProducts();

        return <div>
            <Well>
                <h1>Lista ulubionych sklepów</h1>
                <ul>
                    {DataShops.finalState.shops
                        .filter(s =>
                            favShopsIds.filter(favShop => favShop === s.id).length
                        ).map(s => {
                            return <li key={s.id}>{s.name}</li>
                        })}
                </ul>
                <h1>Lista ulubionych produktów</h1>
                {finalState.products
                    .filter(prod =>
                        favProductsIds.find(favProd => favProd === prod.id)
                    ).map(prod => {
                        return <li key={prod.id}>{prod.name}</li>
                    })}
            </Well>
        </div>
    }
}
