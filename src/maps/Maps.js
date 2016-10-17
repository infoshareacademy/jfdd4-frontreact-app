/**
 * Created by karol on 12.10.16.
 */
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import shops from '../data/dataShops'

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
               context.setState({ shops: shops.data})
    }

    render() {
        return (
            <div style={{width: '800px', height: '500px'}}>
                <GoogleMap
                    center={[54.352401, 18.647500]}
                    zoom={12}>
                    {this.state.shops.map(function (shop) {
                        return <Place key={shop.id}  {...shop.location} icon={shop.icon} text={shop.text} />
                    })}
                    
                </GoogleMap>
            </div>
        )
    }
}