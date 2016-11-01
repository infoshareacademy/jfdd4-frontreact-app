/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Col} from 'react-bootstrap'
import Amounts from './amounts/Amounts'
import { connect } from 'react-redux'
import { addProduct } from './actionCreators'
import AddForm from './add-form/AddForm'

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
        <PageHeader>Lista Zakupów
            <small> zrób listę</small>
        </PageHeader>
        <Row>
            <Col>
                <Amounts />
            </Col>
            <Col>
                <td>
                    <AddForm studentId={student.id} handleSubmit={addScore} />
                </td>
            </Col>
        </Row>
    </Well>
)
export default connect(mapStateToProps)(ShoppingList)