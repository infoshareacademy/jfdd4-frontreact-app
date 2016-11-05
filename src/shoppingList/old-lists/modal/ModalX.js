/**
 * Created by kbro2 on 05.11.2016.
 */
import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import OldLists from '../OldLists'

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
             bsStyle="primary"
             bsSize="large"
             onClick={this.open}
         >
             Launch demo modal
         </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
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