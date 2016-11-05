import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'

import './Maps.css'
import {connect} from 'react-redux'
import {Spinner} from 'react-mdl';
import {Icon} from 'react-mdl';
import {Link} from 'react-router'


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    fetchingProducts: state.productsData.fetchingProducts,
    shops: state.shopsData.shops
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

class Maps extends React.Component {
    render() {
        var {
            fetchingProducts,
            fetchingShops,
            products,
            shops,
            productId
        } = this.props

        return (
            <div>
                {products
                    .filter( product => (productId == product.id)
                    )
                    .map(
                        function (product) {
                            return (
                                <div>
                                    <div id="MAP">
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

export default connect(mapStateToProps)(Maps)








