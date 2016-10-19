export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || []
}


export function favoriteProduct (product) {
    var favoriteProducts = getFavoriteProducts();


    if (favoriteProducts.indexOf(product.id) === -1) {
        favoriteProducts.push(product.id);
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProduct))
}
