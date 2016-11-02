import React from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'
import { connect } from 'react-redux'
import { activateFilter } from './actionCreators'
import { markProductAsFavorite, dissmarkProductAsFavorite, addToFavorites } from '../app/actionCreators'
import ButtonAddToList  from './button/ButtonAddToList'
import ButtonAddToFavorite from './button/ButtonAddToFavorite'
import ButtonShowOnMap from './button/ButtonShowOnMap'
import ButtonMoreInformation  from './button/ButtonMoreInformation'
import filters from './filters'
import './Products.css'
import { Link } from 'react-router'
import { Col, Image, ButtonGroup,  } from 'react-bootstrap'
import { Spinner, Tabs, Tab } from 'react-mdl';


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    availableFilters: state.productsData.availableFilters,
    activeFilter: {
        name: state.productsData.activeFilterNames,
        predicate: product => {
            if (state.productsData.activeFilterNames.length == 0 ) {
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
                <Tab>
                    <ButtonGroup key={filterName}
                                 style={{padding: '0 10px', fontSize: '12', textAlign: 'center'}}
                                 onClick={() => activateFilter(filterName)}
                                 className={filterName === activeFilter.name ? 'active' : ''}>
                            {filters[filterName].label}
                    </ButtonGroup>
                </Tab>
            ))}
        </div>
        <div className="break"></div>
        {fetchingProducts ? <Spinner singleColor /> : null}
        <div>
            {products
                .filter(activeFilter.predicate)
                .map(product => (
                    <ul>
                        <div>
                            <Col xs={10} sm={6} md={4} lg={3} key={product.id} >
                                <div className="card products polaroid">
                                    <li  className="card-header">
                                        PRODUKT
                                    </li>
                                    <div className="card-image">
                                        <Image className="size" src={product.image}/>
                                        <ButtonAddToList />
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
                                                         <ButtonAddToFavorite onClick={() => addToFavorites(product.id)} />
                                                     </span>
                                                    <span className="icon-center">
                                                        <ButtonShowOnMap />
                                                     </span>
                                                    <span className="icon-right">
                                                        <Link to={"/products/" + product.id}>
                                                            <ButtonMoreInformation />
                                                        </Link>
                                                     </span>
                                                    {/*<button onClick={() => addToFavorites(product.id)}>*/}
                                                    {/*Add favorites*/}
                                                    {/*</button>*/}
                                                    {/*<button onClick={() => dissmarkProduct(product.id)}>*/}
                                                    {/*Del favorites*/}
                                                    {/*</button>*/}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </ul>
                ))}
        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Products)




