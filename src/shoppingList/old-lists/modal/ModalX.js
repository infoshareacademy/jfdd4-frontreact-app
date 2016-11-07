/**
 * Created by kbro2 on 05.11.2016.
 */
import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import OldLists from '../OldLists'
import "../../ShoppingList.css"


const ModalX = React.createClass({
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {
         return (
        <div>
         <Button
             id="btn-show"
             bsStyle="success"
             bsSize="default"
             onClick={this.open}
         >
             Listy Zapisane
         </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Zapisane Listy</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <OldLists/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>)
    }
});

export default ModalX