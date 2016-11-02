/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Button, Col} from 'react-bootstrap'
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
        <Col>
            {items
                .map(items => (
                    <tr key={items.id}>
                        <td>
                            {items.shopName}
                        </td>
                        <td>
                            {items.quantity}
                        </td>
                        <td>
                            {items.productName}
                        </td>
                        <td>
                        <Button onClick={() => deleteItem(items.id)}>
                             Usuń
                        </Button>
                        </td>
                    </tr>))
            }
        </Col>
    </Well>
);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)

