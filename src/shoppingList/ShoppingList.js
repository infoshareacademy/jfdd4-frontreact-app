/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Col} from 'react-bootstrap'
import Amounts from './amounts/Amounts'
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
                <Amounts />
            </Col>
        </Row>
    </Well>
)
export default connect(mapStateToProps)(ShoppingList)