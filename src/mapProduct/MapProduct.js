import React, {Component} from 'react';
import {Link} from 'react-router'
import {Glyphicon, Grid, Col, Row, Image} from 'react-bootstrap'
import ButtonBack  from '../product/button/ButtonBack'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import {Icon} from 'react-mdl';
import './MapsProduct.css';
import { Spinner } from 'react-mdl';
import { Tooltip, OverlayTrigger  } from 'react-bootstrap';

import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    products: state.productsData.products,
    fetchingProducts: state.productsData.fetchingProducts,
    shops: state.shopsData.shops,
    coordinate: state.mapProduct.coordinate,
    fetchingCoordinate : state.mapProduct.fetchingCoordinate
})


function createMapOptions(maps) {

    return {
        panControl: true,
        mapTypeControl: true,
        scrollwheel: false,
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_CENTER,
            style: maps.ZoomControlStyle.LARGE
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.TOP_RIGHT
        }
    }
}

class MapProduct extends React.Component {
    render() {
        var {
            fetchingProducts,
            fetchingShops,
            fetchingCoordinate,
            products,
            shops,
            params,
            coordinate
        } = this.props

        if (fetchingCoordinate) {
            return (
                <div className="map2 polaroid">
                    <Spinner className="loading"/>
                </div>
            );
        }

        return (
            <div className="map2 polaroid">
                <li className="card-header">
                    PRODUKT DOSTĘPNY W NAJBLIŻSZYM SKLEPIE
                </li>
                {
                    products
                        .filter(
                            function (product) {
                                if (params.id == product.id) {
                                    console.log('moje nowe wspol' + coordinate);
                                    return true
                                }
                            }
                        )
                        .map(
                            function (product) {
                                return (
                                    <div>
                                        <div className="map">
                                            <GoogleMap
                                                bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
                                                center={[54.408636, 18.588977]}
                                                zoom={13}
                                                options={createMapOptions}>
                                                {shops
                                                    .filter(
                                                        shop => {
                                                            var nearestShopId = getNearestShopId(shops, coordinate, product);
                                                            return shop.id ==  nearestShopId;
                                                        }
                                                    )
                                                    .map(
                                                        shop =>
                                                            <Place
                                                                lat={shop.location.lat}
                                                                lng={shop.location.lng}
                                                                tooltip={shop.name}
                                                            >
                                                            </Place>
                                                    )
                                                }
                                            </GoogleMap>
                                        </div>
                                    </div>
                                )
                            }
                        )
                }
                <Link to={'/products'}>
                    <ButtonBack />
                </Link>
            </div>
        )
    }
}


function getNearestShopId(shops, coordinate, product) {
    var minDistance = Number.MAX_VALUE;
    var x = -1;
    for (var i = 0; i < shops.length; i++) {
        if (product.shops.indexOf(shops[i].id) !== -1) {
            var shopDistance = getDistanceFromLatLonInKm(coordinate.coords.latitude, coordinate.coords.longitude, shops[i].location.lat, shops[i].location.lng);
            if (minDistance > shopDistance) {
                minDistance = shopDistance;
                x = i;
            }
        }
    }
    return shops[x].id
}

// copy from http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}


export default connect(mapStateToProps)(MapProduct)
