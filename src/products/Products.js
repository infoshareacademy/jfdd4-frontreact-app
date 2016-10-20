import React from 'react'
import FilterButton from './filter-button/FilterButton'
import {initialState, finalState} from '../data/dataProducts'
import { Well } from 'react-bootstrap'
import { markProductAsFavorite, getFavoriteProducts, dissmarkProductAsFavorite } from '../marketFavorites/favoriteProducts'



function filterButton(handleClick, activeFilter, myFilter, category){
    return (
        <FilterButton handleClick={handleClick}
                      myFilter={myFilter}
                      activeFilter={activeFilter}>
            {category}
        </FilterButton>
    )
}

export default class Products extends React.Component {
    constructor() {
        super()
        this.state = initialState
        this._handleNoneFilterClick = this._handleFilterClick.bind(this, 'none')
        this._handleIsCerealFilterClick = this._handleFilterClick.bind(this, 'IsCereal')
        this._handleIsOilsFilterClick = this._handleFilterClick.bind(this, 'IsOils')
        this._handleIsRiceFilterClick = this._handleFilterClick.bind(this, 'IsRice')
        this._handleIsFruitFilterClick = this._handleFilterClick.bind(this, 'IsFruit')
        this._handleIsFishFilterClick = this._handleFilterClick.bind(this, 'IsFish')
        this._handleIsBreadFilterClick = this._handleFilterClick.bind(this, 'IsBread')
        this._handlePrice1FilterClick = this._handleFilterClick.bind(this, 'Price1')
        this._handlePrice2FilterClick = this._handleFilterClick.bind(this, 'Price2')
        this._handlePrice3FilterClick = this._handleFilterClick.bind(this, 'Price3')
        
    }

    componentWillMount() {
        var context = this;
        setTimeout(function () {
            context.setState(finalState)
        }, 0);
    }


    _handleFilterClick(filterName) {
        this.setState({ activeFilter: filterName})
    }

    render() {

        var isLoading = this.state.isLoading,
            allProducts = this.state.products,
            allFilters = this.state.filters,
            activeFilterName = this.state.activeFilter,
            selectedFilter = allFilters[activeFilterName],
            filteredProducts = allProducts.filter(selectedFilter),
            favorites = getFavoriteProducts(),
            forceUpdate = this.forceUpdate.bind(this);


        
        
        return (
            <div>
                <Well>
                <div className="alert alert-success" role="alert"><h3><center>Produkty</center></h3></div>
                <p>
                    {filterButton(this._handleNoneFilterClick, 'none', this.state.activeFilter, 'wszystko')}
                    {filterButton(this._handleIsCerealFilterClick, 'IsCereal', this.state.activeFilter, 'kasze')}
                    {filterButton(this._handleIsOilsFilterClick, 'IsOils', this.state.activeFilter, 'olej')}
                    {filterButton(this._handleIsRiceFilterClick, 'IsRice', this.state.activeFilter, 'ryż')}
                    {filterButton(this._handleIsFruitFilterClick, 'IsFruit', this.state.activeFilter, 'suszone owoce')}
                    {filterButton(this._handleIsFishFilterClick, 'IsFish', this.state.activeFilter, 'ryby')}
                    {filterButton(this._handleIsBreadFilterClick, 'IsBread', this.state.activeFilter, 'pieczywo')}
                </p>
                <p>
                    {filterButton(this._handlePrice1FilterClick, 'Price1', this.state.activeFilter, 'cena do 4.99zł')}
                    {filterButton(this._handlePrice2FilterClick, 'Price2', this.state.activeFilter, 'cena od 5.00 do 9.99zł')}
                    {filterButton(this._handlePrice3FilterClick, 'Price3', this.state.activeFilter, 'cena od 10.00zł')}
                </p>
                <ul>
                    {filteredProducts.map(
                        function (product) {
                            if (activeFilterName === 'Price1' || activeFilterName === 'Price2' || activeFilterName === 'Price3') {
                                return <li className=
                                               {favorites.find(productId => productId === productId) ? 'favorite' : ''}
                                                key={product.id}>
                                                    {product.name}
                                                    {product.price}
                                                <button onClick={() => {markProductAsFavorite(product);forceUpdate()}}>Dodaj</button>
                                                <button onClick={() => {dissmarkProductAsFavorite(product);forceUpdate()}}>Usun</button>
                                </li>
                            }
                            else {
                                return <li key={product.id}>{product.name}
                                    <button onClick={() => {markProductAsFavorite(product);forceUpdate()}}>Dodaj</button>
                                    <button onClick={() => {dissmarkProductAsFavorite(product);forceUpdate()}}>Usun</button>
                                </li>
                            }
                        }
                    )}
                </ul>
                    </Well>
            </div>
        )
    }
}


