export function getFavoriteProducts() {
    return JSON.parse(localStorage.getItem('favoriteProducts')) || []
}

export function markProductAsFavorite (product) {
    var favoriteProducts = getFavoriteProducts();


    if (favoriteProducts.indexOf(product.id) === -1) {
        favoriteProducts.push(product.id);
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts))
}

export function dissmarkProductAsFavorite(productToRemove) {
    var favoriteProducts = getFavoriteProducts().filter( productId => productId !== productToRemove.id);

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}
