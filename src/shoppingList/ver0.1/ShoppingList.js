/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addProduct } from './actionCreators'
import EditShopAmount from './editShopAmount/EditShopAmount'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: () => dispatch(addProduct()),
    updateShopAmount: (amountId, score) => dispatch(updateShopAmount(amountId, score))
})

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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)



