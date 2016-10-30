/**
 * Created by kbro2 on 30.10.2016.
 */

import React from 'react'
import {Well, PageHeader, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'

const ShoppingList = ({
    updateShopAmount
}) => (
    <Well>
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
            <Col md={3}>
                <Image src="/img/stokrotka.jpg" rounded/>
            </Col>
            <Col>
                <Amount />
            </Col>
            {/*<Col>*/}
            {/*<ul>*/}
            {/*{props.products.map(products => <li key={products.id}>{products.name}</li>)}*/}
            {/*</ul>*/}
            {/*</Col>*/}
        </Row>
    </Well>
)

export default connect (ShoppingList)
