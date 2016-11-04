
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import Info from './info/Info'
import {finalState} from '../data/dataShops'
import {Modal, Button} from 'react-bootstrap'
import './Maps.css'
import {Well , PageHeader } from 'react-bootstrap'
import { connect} from 'react-redux'
import { Spinner } from 'react-mdl';
import { Icon } from 'react-mdl';

const mapStateToProps = (state) => ({
    coordinate: state.mapsDate.coordinate,
    fetchingCoordinate: state.mapsDate.fetchingCoordinate,
    products: state.productsData.products,
    shops: state.shopsData.shops,
})




function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    return ("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
}

function createMapOptions (maps) {

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

class Shops extends React.Component {
    constructor() {
        super()
        //
        // this.state = {
        //     shops: [],
        //     showModal: false
        // }
    }

    // componentWillMount() {
    //     var context = this;
    //     context.setState({shops: finalState.shops})
    // }



    render() {
        var {
            coordinate, //dany sklep
            fetchingCoordinate
        }=this.props;

        console.log('!', this.props.coordinate)


        // var scope = this;
        //
        // var selectShop = function (shopId) {
        //     scope.setState({
        //         selectedShop: scope.state.shops.find(function (s) {
        //             return s.id == shopId;
        //         }),
        //         showModal: true
        //     });
        // };

        // var shop = this.state.selectedShop || {};
        // console.log('onrender', shop);

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            return ("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
        }

        return (
            <div>
                {fetchingCoordinate ? <Spinner singleColor /> : null}
                <PageHeader>Mapy
                    <small> znajdź najbliższe sklepy w Twojej okolicy.</small></PageHeader>
                <div id="MAP">
                    <GoogleMap
                        bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
                        center={[54.408636, 18.588977]}
                        zoom={13}
                        options={createMapOptions}>
                        {coordinate.map((singleShop) =>
                            <Place

                            lat={singleShop.location.lat}
                            lng={singleShop.location.lng}
                            >
                                <Icon name="room" />
                            </Place>)}

                    </GoogleMap>

                </div>
         </div>
        )
    }
}

export default connect(mapStateToProps)(Shops)