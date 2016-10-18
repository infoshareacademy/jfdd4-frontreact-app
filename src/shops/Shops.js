import React from 'react'

import {initialState, finalState} from '../data/dataShops'

export default class Shops extends React.Component {
    constructor() {
        super()

            this.state = finalState
    }

    render() {
        return (
            <div>
                <h1>Sklepy</h1>
                <ul>

                    {this.state.shops.map(
                        function (shop) {
                            return <li key={shop.id}>{shop.name}</li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}
