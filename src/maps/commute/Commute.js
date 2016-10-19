/**
 * Created by karol on 19.10.2016.
 */
import React from 'react'

import {finalState} from '../../data/dataShops'



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
                <h1>Wybierz sklep lb sklepy do których chesz dojechać</h1>
                <div>{this.state.shops.map(function (shops) {
                    return <button key={shops.id}>
                        {shops.name}
                    </button>
                })}
                </div>
            </div>
        )
    }
}