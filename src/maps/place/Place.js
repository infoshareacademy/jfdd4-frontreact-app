import React from 'react'
import './Place.css'

export default (props) =>
    <div id="icon">
        <img src={props.icon} />
        <div id="text" >{props.text}</div>       
    </div>