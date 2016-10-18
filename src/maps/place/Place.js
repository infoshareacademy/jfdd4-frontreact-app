import React from 'react'
import './Place.css'

export default (props) =>
    <div id="icon" >
        <img src={props.icon} />
        <div id="text" >
            <p>Adres: {props.adres}</p>
            <p>Otwarte codziennie w godzinach : {props.opened}</p>
        </div>
    </div>
