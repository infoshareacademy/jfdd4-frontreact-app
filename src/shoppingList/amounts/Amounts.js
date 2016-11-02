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
    addProduct: (shopName, productName, quantity) => dispatch(addProduct(shopName, productName, quantity))

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
                                            productId={amounts.id}
                                            productName={amounts.name}
                                            shopName={key}
                                            quantity={amounts.amounts[key]}
                                            addToList={addProduct}
                                        />
                                )}
                        </td> 
                        <td>
                         
                        </td>
                    </tr>
                })}

        </Col>
    </Well>
    
);

export default connect (mapStateToProps, mapDispatchToProps)(Amounts)