import React from 'react'
import DataShops from '../data/dataShops'
import {finalState} from '../data/dataProducts'
import DataProducts from '../data/dataProducts'
import { Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'

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

        return (
        <div>
            <Well>
                <PageHeader>Ulubione sklepy
                    <small> lista dodanych sklepow do ulubionych.</small></PageHeader>
                    <ul>{DataShops.finalState.shops
                        .filter(s =>
                            favShopsIds.filter(favShop => favShop === s.id).length
                        ).map(s => {
                            return <tr key={s.id}><td>{s.name}</td></tr>
                        })}</ul>
                <PageHeader>Ulubione produkty
                    <small> lista dodanych produktów do listy zakupowej.</small></PageHeader>
                <ul>
                    {finalState.products
                    .filter(prod =>
                        favProductsIds.find(favProd => favProd === prod.id)
                    ).map(prod => {
                        return <tr key={prod.id}><td>{prod.name}</td></tr>
                    })}
                    </ul>

            </Well>
        </div>
        )
    }
}
