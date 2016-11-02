/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { addProduct } from './actionCreators'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (shopName, quantity) => dispatch(addProduct(shopName, quantity)),
})

const ShoppingList = ({
    addProduct,
}) => (
    <Well>
        <PageHeader>Lista Zakupów</PageHeader>
    </Well>
)
export default connect(mapStateToProps)(ShoppingList)