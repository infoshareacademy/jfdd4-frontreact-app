/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Button, Grid, Row, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { addProduct } from './actionCreators'
import { counterValue, onAddClick, onRevClick } from './putter/Putter'
const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: () => dispatch(addProduct())
})

const ShoppingList = (props) =>
<Well>
    <PageHeader>Lista Zakupów
        <small> zrób listę</small>
    </PageHeader>
    <Row>
        <Col md={3}>
            <Image src="/img/stokrotka.jpg" rounded/>
        </Col>
        <Button onClick={() => onAddClick()}>Increase</Button>
        <Col md={3}>
            <h1>Ilość = {counterValue}</h1>
        </Col>
        <Button onClick={() => onRevClick()}>Decrease</Button>
        <Col md={3}>
            <Button onClick={() => props.addProduct()}>Dodaj do listy</Button>
        </Col>
        <Col>
            <ul>
                {props.products.map(products => <li key={products.id}>{products.name}</li>)}
            </ul>
        </Col>
    </Row>
</Well>

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)



