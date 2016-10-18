import React from 'react'


function getFavoriteShops() {
    return JSON.parse(localStorage.getItem('favoriteShops')) || []
}

function favoriteShops () {
    for (var i=0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i))
    )}
}



// var favoriteProducts = getFavoriteProducts();
// var favoriteShops = getFavoriteShops();

export default (props) => (
            <div>
                <h1>Favorites</h1>
                <ul>
                    {favoriteShops().map(function (item, index) {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
)

