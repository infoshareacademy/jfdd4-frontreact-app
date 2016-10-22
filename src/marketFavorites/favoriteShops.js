export function getFavoriteShops() {
    return JSON.parse(localStorage.getItem('favoriteShops')) || []
}

export function markShopAsFavorite(shop) {
    var favoriteShops = getFavoriteShops();
  

    if (favoriteShops.indexOf(shop.id) === -1) {
        favoriteShops.push(shop.id);
    }

    localStorage.setItem('favoriteShops', JSON.stringify(favoriteShops))
}

export function dissMarkShopAsFavorite(shopToRemove){
    var favoriteShops = getFavoriteShops().filter( shopId => shopId !== shopToRemove.id);

    localStorage.setItem('favoriteShops', JSON.stringify(favoriteShops));
}