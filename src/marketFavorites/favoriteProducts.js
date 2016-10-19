function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoritesProducts')) || []
}

function favoriteProduct (products) {
    var favoriteProducts = getFavoriteProducts()
    var productId = product.productId


    if (favoriteProduct.indexOf(id) === -1) {
        favoriteProduct.push(id);
    }
    localStorage.setItem('favoritesProducts', JSON.stringify(favoriteProduct))
}

function dissmarkProductAsFavorite(productToRemove) {
    var favoriteProducts = getFavoriteProducts().filter(productId => productId !== productToRemove.id);

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}


export default getFavoriteProducts()
export default favoriteProduct()
export default dissmarkProductAsFavorite()