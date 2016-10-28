import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { connect } from 'react-redux'
import { activateFilter } from './actionCreators'
import { markProductAsFavorite, dissmarkProductAsFavorite, addToFavorites } from '../app/actionCreators'
import filters from './filters'
import './Products.css'
import { Link } from 'react-router'

import { Col, Row, Well, Glyphicon, PageHeader, Table, Button } from 'react-bootstrap'


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
    dissmarkProduct: (productId) => dispatch(dissmarkProductAsFavorite(productId)),
    addToFavorites: (productId) => dispatch(addToFavorites(productId))
})


const Products = ({
    fetchingProducts,
    products,
    availableFilters,
    activeFilter,
    activateFilter,
    favoriteProduct,
    dissmarkProduct,
    addToFavorites
}) => (
<div>
    <div className="break"></div>
    <div className="filter">
        {availableFilters.map(filterName => (
            <button key={filterName}
                    onClick={() => activateFilter(filterName)}
                    className={filterName === activeFilter.name ? 'active' : ''}>
                {filters[filterName].label}
            </button>
        ))}
    </div>

    {fetchingProducts ? <p>Trwa ładowanie listy produktów...</p> : null}
    <div>
        <Row>
        {products
            .filter(activeFilter.predicate)
            .map(product => (
                <Link to={"/products/" + product.id}>

                    <Col xs={12} md={3} key={product.id} className="product" thumbnail >
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <p className="text-right">
                                <button onClick={() => addToFavorites(product.id)}>
                                    Add to favorites
                                </button>
                                <button onClick={() => dissmarkProduct(product.id)}>
                                    Delete from favorites
                                </button>
                            </p>
                        </Col>
                    </Link>
            ))}
        </Row>
    </div>
</div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Products)



// <div>
// <h1>Products</h1>
// {availableFilters.map(filterName => (
//     <button key={filterName}
//             onClick={() => activateFilter(filterName)}
//             className={filterName === activeFilter.name ? 'active' : ''}>
//         {filters[filterName].label}
//     </button>
// ))}
// {fetchingProducts ? <p>Trwa ładowanie listy produktów...</p> : null}
// <Table striped bordered condensed hover>
//     <thead>
//     </thead>
//     <ReactCSSTransitionGroup
//         component="tbody"
//         transitionName="example"
//         transitionEnterTimeout={500}
//         transitionLeaveTimeout={300}>
//         {products
//             .filter(activeFilter.predicate)
//             .map(product => (
//                 <tr key={product.id}>
//                     <td>{product.name}</td>
//                     <td>{product.price}</td>
//                     <td className="text-right">
//                         <button onClick={() => addToFavorites(product.id)}>
//                             Add to favorites
//                         </button>
//                         <button onClick={() => dissmarkProduct(product.id)}>
//                             Delete from favorites
//                         </button>
//                     </td>
//                 </tr>
//             ))}
//     </ReactCSSTransitionGroup>
// </Table>
// </div>