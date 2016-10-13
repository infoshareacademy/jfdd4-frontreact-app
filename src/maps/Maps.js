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
        setTimeout(function () {
            context.setState({
                shops: [
                    {
                        id: 1,
                        name: 'Lidl',
                        location: {lat: 54.356504, lng: 18.588442}
                    },
                    {
                        id: 2,
                        name: 'Biedronka',
                        location: {lat: 54.321204, lng: 18.782442}
                    }

                ]

            })
        }, 1000)
    }

    render() {
        return (
            <div style={{width: '600px', height: '300px'}}>
                <GoogleMap
                   
                    center={[54.352401, 18.647500]}
                    zoom={9}>
                    {this.state.shops.map(function (shop) {
                        return <Place key={shop.id} {...shop.location} text={'A'} />
                    })}
                </GoogleMap>
            </div>
        )
    }
}