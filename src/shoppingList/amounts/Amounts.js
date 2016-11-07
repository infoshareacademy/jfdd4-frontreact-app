/**
 * Created by kbro2 on 30.10.2016.
 */
import React from 'react'
import {Well, Col, Modal, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import ListForm from './list-form/ListForm'
import { addProduct, updateQuantity, openModal, closeModal} from './actionCreators'
import './Amounts.css'

const mapStateToProps = (state) => ({
   amounts: state.amountsData.amounts
})

const mapDispatchToProps = (dispatch) => ({
    addProduct: (itemId, price, quantity, productName, shopName) => dispatch(addProduct(itemId, price, quantity, productName, shopName )),
    updateQuantity: (shopName, quantity) => dispatch(updateQuantity(shopName, quantity))

})

const Amounts = ({amounts, addProduct, updateQuantity, params}) => (
   
    <Well>
        <Modal className="Modal" show={() => openModal()} onHide={() => closeModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Dodaj do listy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {amounts
                .filter(amounts => amounts.id === parseInt(params.productId))
                .map(amounts => {
                    return <tr key={amounts.id}>
                        <td>
                            <a className="productName" >{amounts.name}</a>
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
                                            Quantitis={updateQuantity}                                      />
                                )}
                        </td>
                      </tr>
                })}
                <div>W każdym z powyższych sklepów jest wskazana liczba artykułów, wybież odpowiednią ilość i dodaj do listy</div>
                </Modal.Body>
            <Modal.Footer>
                <Button  >
                    <a id="close" href={"../products"}> Close</a>
               </Button>
            </Modal.Footer>
        </Modal>
    </Well>
    
);

export default connect (mapStateToProps, mapDispatchToProps)(Amounts)