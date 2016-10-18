function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoritesProducts')) || []
}
//podpiac pod contener
function favoriteProduct (products) {
    var favoriteProducts = getFavoriteProducts()
    var productId = product.productId


    if (favoriteProduct.indexOf(id) === -1) {
        favoriteProduct.push(id);
    }
    localStorage.setItem('favoritesProducts', JSON.stringify(favoriteProduct))
}
//podpiac pod onClick
export default getFavoriteProducts()
export default favoriteProduct()