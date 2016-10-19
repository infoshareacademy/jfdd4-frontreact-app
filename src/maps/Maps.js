/**
 * Created by karol on 12.10.16.
 */
import React from 'react'
import GoogleMap from 'google-map-react'
import Place from './place/Place'
import Info from './info/Info'
import {finalState} from '../data/dataShops'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// import $ from 'jquery'

export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: [],

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
                })
            });
            // debugger;
            // alert('shop selected',shopId);
        };

        var shop = this.state.selectedShop || {};
        console.log('onrender', shop);

        return (
            <div style={{width: '100%', height: '500px'}}>
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyCIGFuueBb3ewt-Ewe7ySfhE9ZdHVjdPsc'}}
                    center={[54.408636, 18.588977]}
                    zoom={13}>
                    {this.state.shops.map(function (shop) {
                        return <Place key={shop.id} selectShop={selectShop} shopId={shop.id} {...shop.location}
                                      icon={shop.icon} adres={shop.adres}
                                      opened={shop.opened}/>
                    })}
                </GoogleMap>
                <Info key={shop.id}  {...shop.location} pic={shop.pic} link={shop.link} info={shop.info}
                      icon={shop.icon} adres={shop.adres}
                      opened={shop.opened}/>
            </div>
        )
    }
}    