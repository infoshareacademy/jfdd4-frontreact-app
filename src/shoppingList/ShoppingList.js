/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import Number from './number/Number'
import { connect } from 'react-redux'
import { addProduct } from './actionCreators'


const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: () => dispatch(addProduct()),
})

const ShoppingList = ({
    updateAchievement
}) => (
    <Well>
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
             <Col>
                <Number />
            </Col>
        </Row>
    </Well>
)
export default connect(mapStateToProps)(ShoppingList)