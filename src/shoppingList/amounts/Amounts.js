/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, Button, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import ListForm from './list-form/ListForm'
import { addProduct} from './actionCreators'
    
const mapStateToProps = (state) => ({
   amounts: state.amountsData.amounts
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (itemId, price, quantity, productName, shopName) => dispatch(addProduct(itemId, price, quantity, productName, shopName ))

})

const Amounts = ({amounts, addProduct}) => (
   
    <Well>
        <Col>
            {amounts
                .map(amounts => {
                    return <tr key={amounts.id}>
                        <td>
                            <h3>{amounts.name}</h3>
                            {Object
                                .keys(amounts.amounts)
                                .map(
                                    key => 
                                        <ListForm 
                                            itemId={amounts.id}
                                            productName={amounts.name}
                                            quantity={amounts.amounts[key]}
                                            price={amounts.price}
                                            shopName={key}
                                            addToList={addProduct}
                                                                                   />
                                )}
                        </td> 
                      </tr>
                })}

        </Col>
    </Well>
    
);

export default connect (mapStateToProps, mapDispatchToProps)(Amounts)