export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoritesProducts')) || []
}
//podpiac pod contener
export function favoriteProduct (products) {
    var favoriteProducts = getFavoriteProducts()
    var productId = product.productId


    if (favoriteProduct.indexOf(id) === -1) {
        favoriteProduct.push(id);
    }
    localStorage.setItem('favoritesProducts', JSON.stringify(favoriteProduct))
}
