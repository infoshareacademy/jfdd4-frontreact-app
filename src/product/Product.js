import React, { Component } from 'react';
import {
    initialState as initialProductsState,
    finalState as finalProductsState
} from '../data/dataProducts'
import {
    initialState as initialShopsState,
    finalState as finalShopsState
} from '../data/dataShops'
import { Link } from 'react-router'


export default class Product extends React.Component {
    constructor() {
        super()

        this.state = {
            products: finalProductsState.products,
            productsData: initialProductsState
        }
    }

    render() {

        return (
            <h1>{this.props.params.id}</h1>
        )
    }
}

