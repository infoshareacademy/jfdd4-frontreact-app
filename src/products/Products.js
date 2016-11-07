import React from 'react'
import { connect } from 'react-redux'
import { activateFilter } from './actionCreators'
import ButtonAddToList  from './button/ButtonAddToList'
import ButtonAddToFavorite from './button/ButtonAddToFavorite'
import ButtonShowOnMap from './button/ButtonShowOnMap'
import ButtonMoreInformation  from './button/ButtonMoreInformation'
import { markProductAsFavorite, dissmarkProductAsFavorite, addToFavorites, deleteFavorite } from '../app/actionCreators'
import filters from './filters'
import './Products.css'
import { Link } from 'react-router'
import { Col, Image, ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap'
import { Spinner, Tab } from 'react-mdl';


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    availableFilters: state.productsData.availableFilters,
    activeFilter: {
        names: state.productsData.activeFilterNames,
        predicate: product => {
            if (state.productsData.activeFilterNames.length === 0 ) {
                return true;
            }
            var result = false;
            state.productsData.activeFilterNames.forEach(filterName => {
                    result |= filters[filterName].predicate(product);
                }
            )
            return result;
        }
    },
    fetchingProducts: state.productsData.fetchingProducts,
    favorites: state.productsData
})

const mapDispatchToProps = (dispatch) => ({
    activateFilter: (filterId) => dispatch(activateFilter(filterId)),
    favoriteProduct: (productId) => dispatch(markProductAsFavorite(productId)),
    dissmarkProduct: (productId) => dispatch(dissmarkProductAsFavorite(productId)),
    addToFavorites: (productId) => dispatch(addToFavorites(productId)),
    deleteFavorite: (id) => dispatch(deleteFavorite(id))
})


const Products = ({
    fetchingProducts,
    products,
    favorites,
    availableFilters,
    activeFilter,
    activateFilter,
    favoriteProduct,
    dissmarkProduct,
    addToFavorites,
    deleteFavorite
}) => (

    <div>
        <div className="break"></div>



        <div className="filter">
            <ButtonToolbar>
                <ButtonGroup bsSize = "large">
                    {availableFilters.map(filterName => (
                        <Button key={filterName}
                                style={{padding: '5px 10px ', fontSize: '12', textAlign: 'center'}}
                                onClick={() => activateFilter(filterName)}
                                className={activeFilter.names.indexOf(filterName) > -1 ? 'active' : ''}>
                            {filters[filterName].label}
                        </Button>
                    ))}
                </ButtonGroup>
            </ButtonToolbar>
        </div>
        <div className="break"></div>
        {fetchingProducts ? <Spinner singleColor/> : null}
        <div>
            {products
                .filter(activeFilter.predicate)
                .map(product => {
                    let favs = favorites.favoriteProducts.filter(favMark => favMark.productId === product.id);
                    return (
                        <ul>
                            <div>
                                <Col xs={10} sm={6} md={4} lg={3} key={product.id}>
                                    <div className="card products polaroid">
                                        <li className="card-header">
                                            PRODUKT
                                        </li>
                                        <div className="card-image">
                                            <Image className="size" src={product.image}/>
                                            <Link to={'/amounts/' + product.id}>
                                                <ButtonAddToList/>
                                            </Link>
                                        </div>
                                        <div className="card-content">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <span className="left-side">NAZWA</span>
                                                    <span className="right-side">{product.name}</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="left-side">KATEGORIA</span>
                                                    <span className="right-side">{product.category}</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <span className="left-side">CENA</span>
                                                    <span className="right-side">{product.price}&ensp;zł</span>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="card-block">
                                                        <span className="icon-left">
                                                            <ButtonAddToFavorite shouldBeRed={favs.length > 0}
                                                                                 onClick={() => favs.length > 0 ? deleteFavorite(favs) : addToFavorites(product.id)}/>
                                                        </span>
                                                        <span className="icon-center">
                                                            <Link to={"/products/map/" + product.id}>
                                                                <ButtonShowOnMap />
                                                            </Link>
                                                        </span>
                                                        <span className="icon-right">
                                                            <Link to={"/products/" + product.id}>
                                                                <ButtonMoreInformation />
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </ul>
                    )
                })}
        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Products)