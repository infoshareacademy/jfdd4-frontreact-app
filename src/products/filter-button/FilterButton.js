import React from 'react'
import { Button } from 'react-bootstrap'

export default (props) => (
        <Button  onClick={props.handleClick}
                 onClick={this.props.onClick}
                className={props.activeFilter === props.myFilter ? 'active' : ''}
                 >
            {props.children}
        </Button>

)
