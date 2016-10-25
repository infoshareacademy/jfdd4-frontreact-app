import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { connect } from 'react-redux'
import { activateFilter } from './actionCreators'
import { markProductAsFavorite, dissmarkProductAsFavorite } from '../app/actionCreators'
import filters from './filters'

import { Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    availableFilters: state.productsData.availableFilters,
    activeFilter: {
        name: state.productsData.activeFilterName,
        predicate: filters[state.productsData.activeFilterName].predicate
    },
    fetchingProducts: state.productsData.fetchingProducts
})

const mapDispatchToProps = (dispatch) => ({
    activateFilter: (filterId) => dispatch(activateFilter(filterId)),
    favoriteProduct: (productId) => dispatch(markProductAsFavorite(productId)),
    dissmarkProduct: (productId) => dispatch(dissmarkProductAsFavorite(productId))
})


const Products = ({
    fetchingProducts,
    products,
    availableFilters,
    activeFilter,
    activateFilter,
    favoriteProduct,
    dissmarkProduct
}) => (
<div>
<h1>Products</h1>
    {availableFilters.map(filterName => (
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
                .map(product => (
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
