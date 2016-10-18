
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import Info from './info/Info'
import {finalState} from '../data/dataShops'

export default (props) => <h1>Maps</h1>

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: []
        }
    }

    componentWillMount() {
        var context = this;
        context.setState({shops: finalState.shops})
    }

    render() {
        return (
            <div style={{width: '100%', height: '500px'}}>
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
                    center={[54.408636, 18.588977]}
                    zoom={13}>
                    {this.state.shops.map(function (shop) {
                        return <Place key={shop.id}  {...shop.location} icon={shop.icon} adres={shop.adres}
                                      opened={shop.opened}/>
                    })}
                </GoogleMap>
                <div id="infoBar">
                    {this.state.shops.map(function (shop) {
                        return <Info key={shop.id}  {...shop.location} pic={shop.pic} link={shop.link} info={shop.info} icon={shop.icon} adres={shop.adres}
                                      opened={shop.opened}/>
                    })
                    }
                </div>
            </div>
        )
    }
}