/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Button, Col, Grid} from 'react-bootstrap'
import { connect } from 'react-redux'
import {deleteItem} from './actionCreators'

const mapStateToProps = (state) => ({
    items: state.shoppingListData.items,
    
})
const mapDispatchToProps = (dispatch) => ({
    deleteItem: (itemId) => dispatch(deleteItem(itemId)),

});

const ShoppingList = ({items, deleteItem}) => (
    <Well>
        <PageHeader>Lista Zakupów</PageHeader>
        <Grid>
            {items
                .map(item => (
                    <Row key={item.id}>
                        <Col md={2}>
                            {item.productName}
                        </Col>
                        <Col md={2}>
                            za {item.price} zł
                        </Col>
                        <Col md={2}>
                               w ilości {item.quantity} sztuk
                        </Col>
                        <Col md={2}>
                            ze sklepu {item.shopName}
                        </Col>
                        <Col md={1}>
                          <Button onClick={() => deleteItem(item.id)}>
                                 Usuń
                            </Button>
                        </Col>
                       
                    </Row>))
            } 
            <Col>
            Łączny koszt = {items.reduce( (prev, next) => prev + next.price * next.quantity, 0)}
        </Col>

        </Grid>
    </Well>
);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)

