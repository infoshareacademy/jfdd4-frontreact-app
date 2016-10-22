import React from 'react'
import { connect } from 'react-redux'
import { activateFilter } from './actionCreators'
import filters from './filters'
import { Table } from 'react-bootstrap'
import { Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { markProductAsFavorite, getFavoriteProducts, dissmarkProductAsFavorite } from '../marketFavorites/favoriteProducts'

const mapStateToProps = (state) => ({
    products: state.productsData.products,
    avaliableFilters: state.productsData.avaliableFilters,
    activeFilter: {
        name: state.productsData.activeFilterName,
        predicate: filters[state.productsData.activeFilterName].predicate
    },
    fetchingProducts: state.productsData.fetchingProducts
})

const mapDispatchToProps = (dispatch) => ({
    activateFilter: (filterId) => dispatch(activateFilter(filterId)),
    favoriteProduct: (productId) -> dispatch(markProductAsFavorite(productId)),
    dissmarkProduct: (productId) -> dispatch(dissmarkProductAsFavorite(productId))
})


const Products = ({
    fetchingProducts,
    products,
    avaliableFilters,
    activeFilter,
    activateFilter,
    favoriteProduct,
    dissmarkProduct
}) => (
<div>
<h1>Products</h1>
    {avaliableFilters.map(filterName => (
        <button key={filterName}
                onClick={() => activateFilter(filterName)}
                className={filterName === activeFilter.name ? 'active' : ''}>
            {filters[filterName].label}
        </button>
    ))}
    {fetchingProducts ? <p>Fetching students...</p> : null}
    <Table striped bordered condensed hover>
        <thead>
        </thead>
        <ReactCSSTransitionGroup
            component="tbody"
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {products
                .filter(activeFilter.predicate)
                .map(products => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td className="text-right">
                            <button onClick={() => favoriteProduct(product.id)}>
                                Add to favorites
                            </button>
                        </td>
                    </tr>
                ))}
        </ReactCSSTransitionGroup>
    </Table>
</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Products)
