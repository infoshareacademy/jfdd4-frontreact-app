/**
 * Created by karol on 12.10.16.
 */
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
// import $ from 'jquery'

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: []
        }
    }

    componentWillMount() {
        var context = this;
           context.setState({
                shops: [
                    {
                        id: 1,
                        name: 'Lidl',
                        location: {lat: 54.357904, lng: 18.588182},
                        icon: '/img/lidl-icon.png'
                    },
                    {
                        id: 2,
                        name: 'Biedronka',
                        location: {lat: 54.416004, lng: 18.588872},
                        icon: '/img/biedronka-icon.png'
                    }  ,
                    {
                        id: 4,
                        name: 'Lidl',
                        location: {lat: 54.398504, lng: 18.591442},
                        icon: '/img/lidl-icon.png'
                    } ,
                    {
                        id: 3,
                        name: 'Biedronka',
                        location: {lat: 54.339504, lng: 18.596442},
                        icon: '/img/biedronka-icon.png'
                    }

                ]

            })
    }

    render() {
        return (
            <div style={{width: '800px', height: '500px'}}>
                <GoogleMap
                   
                    center={[54.352401, 18.647500]}
                    zoom={11}>
                    {this.state.shops.map(function (shop) {
                        return <Place key={shop.id}  {...shop.location} icon={shop.icon} />
                    })}
                    
                </GoogleMap>
            </div>
        )
    }
}