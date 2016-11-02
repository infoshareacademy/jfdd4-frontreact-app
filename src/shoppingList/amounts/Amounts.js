/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import ListForm from './list-form/ListForm'
import { addProduct} from './actionCreators'

const mapStateToProps = (state) => ({
   amounts: state.amountsData.amounts
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (amountsName, quantity) => dispatch(addProduct(amountsName, quantity))

})

const Amounts = ({amounts, addProduct}) => (
   
    <Well>
        <ul>
            {amounts
                .map(amounts => {
                    return <tr key={amounts.id}>
                        <td>
                            <h3>{amounts.name}</h3>
                            {Object.keys(amounts.amounts).map(key => <ListForm shopName={key} quantity={amounts.amounts[key]} />)}
                        </td>
                        <td>
                            <Button onCLick={() => addProduct(amounts.name, amounts.amounts)}>
                                Dodaj do listy
                            </Button>
                        </td>
                    </tr>
                })}

        </ul>
    </Well>
    
);

export default connect (mapStateToProps)(Amounts)