/**
 * Created by kbro2 on 26.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import Amount from './amount/Amount'
import { connect } from 'react-redux'
import { addProduct } from './actionCreators'
import EditScoreForm from './edit-score-form/EditScoreForm'

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: () => dispatch(addProduct()),
    updateAchievement: (achievementId, score) => dispatch(updateScore(achievementId, score))
})

const ShoppingList = ({   
    updateAchievement
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

export default connect(mapStateToProps)(ShoppingList)



