import React, {Component} from 'react';
import {Link} from 'react-router'
import {Glyphicon, Grid, Col, Row, Image} from 'react-bootstrap'
import ButtonBack  from '../product/button/ButtonBack'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import {Icon} from 'react-mdl';
// import { getPosition } from 'redux-effects-geolocation';
// import { getLocation } from 'redux-effects-geolocation';

import {connect} from 'react-redux'


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    fetchingProducts: state.productsData.fetchingProducts,
    shops: state.shopsData.shops,
    // coordinate: state.coordinate
})



// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }
//
// function showPosition(position) {
//     console.log ("Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude);
// }
//


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
            products,
            shops,
            params,

        } = this.props

        return (
            <div>
                {
                    products
                        .filter(
                            function (product) {
                                if (params.id == product.id) {
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
                                                            return product.shops.indexOf(shop.id) !== -1;
                                                        }
                                                    )
                                                    .map(
                                                        shop =>
                                                            <Place
                                                                lat={shop.location.lat}
                                                                lng={shop.location.lng}
                                                            >
                                                                <Icon name="room"/>
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
            </div>
        )
    }

}


export default connect(mapStateToProps)(MapProduct)
