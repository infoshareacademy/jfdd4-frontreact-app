

import React from 'react'
import shops from '../data/dataShops'


export default class Shops extends React.Component {
    constructor() {
        super()

        this.state = {
            shops: []
        }
    }


    componentWillMount() {

    }

    render() {
        return (
            <ul>
                <h1>Shops</h1>
                {shops.map(function (shops) {
                    return <li>{shops.ID}{shops.name}{shops.location}</li>
                })}
            </ul>
        )
    }

}
export default shops