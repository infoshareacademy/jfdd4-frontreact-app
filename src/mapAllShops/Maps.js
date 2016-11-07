import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import Info from './info/Info'
import {finalState} from '../data/dataShops'
import {Modal, Button} from 'react-bootstrap'
import './Maps.css'
import {Well , PageHeader } from 'react-bootstrap'

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

export default class MapShops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: [],
            showModal: false
        }
    }

    componentWillMount() {
        var context = this;
        context.setState({shops: finalState.shops})
    }



    render() {

        var scope = this;

        var selectShop = function (shopId) {
            scope.setState({
                selectedShop: scope.state.shops.find(function (s) {
                    return s.id == shopId;
                }),
                showModal: true
            });
        };

        var shop = this.state.selectedShop || {};
        console.log('onrender', shop);

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
            <div className="map2 polaroid">
                <li className="card-header">
                    SKLEPY Z EKOLOGICZNYMI PRODUKTAMI
                </li>
                <div id="MAP">
                    <GoogleMap
                        bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
                        center={[54.408636, 18.588977]}
                        zoom={13}
                        options={createMapOptions}>
                        {this.state.shops.map(function (shop) {
                            return <Place key={shop.id} selectShop={selectShop} shopId={shop.id} {...shop.location}
                                          icon={shop.icon} adres={shop.adres} opened={shop.opened}/>
                        })}
                    </GoogleMap>
                    <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false})}>
                        <Modal.Header closeButton>
                            <Modal.Title><h2>{shop.name}   -   {shop.adres}</h2></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Info key={shop.id}  {...shop.location} pic={shop.pic} link={shop.link} info={shop.info}
                                  icon={shop.icon} adres={shop.adres}
                                  opened={shop.opened}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.setState({ showModal: false})}>Close</Button>
                        </Modal.Footer>
                    </Modal>

                </div>
            </div>
        )
    }
} 