/**
 * Created by piotrszablewski on 17.10.16.
 */
import React from 'react'

export function getfavoriteShops() {
    return JSON.parse(localStorage.getItem('favoriteShops')) || []
}


export function markShopsAsFavorite(shops) {
    var favoriteShops = getFavoritesShops()
    var shopsId = shops.shopsid

    if (favoriteShops.indexOf(id) === -1) {
        favoriteShops.push(id);
    }
    localStorage.setItem('favoriteShops', JSON.stringify(favoriteShops))
}