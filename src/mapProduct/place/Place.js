import React from 'react'
import './Place.css'
import { Icon } from 'react-mdl'
import { Tooltip, OverlayTrigger  } from 'react-bootstrap';


export default (props) => {
    var tooltipCode = (
        <Tooltip id="tooltip">{props.tooltip}</Tooltip>
    );
    return (<OverlayTrigger placement="bottom" overlay={tooltipCode}>
        <Icon name="room"/>
    </OverlayTrigger>);
}




    