/**
 * Created by karol on 19.10.16.
 */
import React from 'react'
import './Availability.css'
import {finalState} from '../../data/dataProducts'
import {finalState as shopsData} from '../../data/dataShops'


export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [],
            shops: []
        }
    }


    componentWillMount() {
        var context = this;
        context.setState({products: finalState.products}),
            context.setState({shops: finalState.shops})

    }

    render() {

        return (
            <div>
                <h1>Sklepy w których dostaniesz następujące produkty</h1>
                <div id="ww">{this.state.products.map(function (products) {
                    return <div id="B" key={products.id}>
                        {products.name}  -
                        {shopsData
                            .shops
                            .filter(
                                shop =>
                                    products.shops.indexOf(shop.id) !== -1
                            )
                            .map(
                                shop => <span>   {shop.name}   </span>
                            )
                        }
                    </div>
                })}
                </div>
              
            </div>
        )
    }
}
                
