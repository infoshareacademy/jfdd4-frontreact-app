/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, PageHeader, Row, Button, Col} from 'react-bootstrap'
import { connect } from 'react-redux'


const mapStateToProps = (state) => ({
    products: state.productsData.products,
    
})
const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (productsId) => dispatch(deleteProduct(productsId)),

})


const ShoppingList = ({
    products, deleteProduct,
}) => (
    <Well>
        <PageHeader>Lista Zakupów</PageHeader>
        <Col>
            {products
                .map(products => {
                    return <tr key={products.id}>
                        <td>
                            <h3>{products.name}</h3>
            <Button onClick={() => deleteProduct(products.id)}>
                Delete
            </Button>
            </td></tr>                })}
        </Col>
    </Well>
)

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList)