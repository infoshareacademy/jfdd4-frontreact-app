/**
 * Created by karol on 19.10.2016.
 */
import React from 'react'
import GoogleMap from 'google-map-react'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import {finalState} from '../../data/dataShops'

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude);
}

getLocation();


function calculateAndDisplayRoute(directionsService, directionsDisplay) {

    directionsService.route({
        origin: 'Gdynia',
        destination: 'Warszawa',
        travelMode: 'DRIVING'
    }, 

        function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });

}

let handleApi = ({map, maps}) => {
    console.log(map, maps)
    var directionsService = new maps.DirectionsService();
    var directionsDisplay = new maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            Shops: []
        }
    }


    componentWillMount() {
        var context = this;
        context.setState({shops: finalState.shops})

    }
    render() {

        return (
            <div>
                <h1>Wybierz sklep lub sklepy do których chesz dojechać</h1>
                <ButtonToolbar>
                    <ButtonGroup> {this.state.shops.map(function (shops) {
                    return <Button bsStyle="primary" bsSize="large" id="button1" key={shops.id}>
                        {shops.name} 
                    </Button>
                })}</ButtonGroup>
                <ButtonGroup>
                <Button bsStyle="primary" bsSize="large" class="button2">
                        Twoja Pozycja
                   </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                   <Button bsStyle="primary" bsSize="large" class="button2">
                       Wyczyść
                   </Button>
                   </ButtonGroup>
                </ButtonToolbar>
                <div style={{ width: '100%', height: 500 }}>
                    <GoogleMap
                        bootstrapURLKeys={{
                          key: 'AIzaSyCkDbleAYeCPGyTEDJ8Jk94gwXDxombvRE'}}
                        center={[59.938043, 30.337157]}
                        zoom={9}
                        onGoogleApiLoaded={handleApi}
                        yesIWantToUseGoogleMapApiInternals>
                    </GoogleMap>
                </div>
            </div>
        )
    }
}

