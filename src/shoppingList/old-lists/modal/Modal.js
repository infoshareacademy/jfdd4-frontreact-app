/**
 * Created by kbro2 on 05.11.2016.
 */
import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import OldLists from '../OldLists'

const ModalX = React.createClass({
    getInitialState() {
        return { showModal: true };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {
         return (
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
        );
    }
});

export default ModalX