import React from 'react'
import { Button } from 'react-bootstrap'
export default (props) => (
    <Button bsStyle="primary" onClick={props.handleClick}
            className={props.activeFilter === props.myFilter ? 'active' : ''}>
        {props.children}
    </Button>
)
