
import React from 'react'
import './Menu.css'
import Item from './item/Item'

export default (props) =>
    <ul className="App-Menu">
        <Item path={`/`} activeWhenMatchingExactly={true}>*</Item>
        <Item path={`/products`}>Products</Item>
        <Item path={`/shops`}>Shops</Item>
        <Item path={`/maps`}>Maps</Item>
    </ul>