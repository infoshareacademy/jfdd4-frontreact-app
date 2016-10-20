export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoritesProducts')) || []
}

export function favoriteProduct (product) {
    var favoriteProducts = getFavoriteProducts()
    var productId = product.productId


    if (favoriteProduct.indexOf(productId) === -1) {
        favoriteProduct.push(productId);
    }
    localStorage.setItem('favoritesProducts', JSON.stringify(favoriteProduct))
}

export function dissmarkProductAsFavorite(productToRemove) {
    var favoriteProducts = getFavoriteProducts().filter(productId => productId !== productToRemove.id);
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}


