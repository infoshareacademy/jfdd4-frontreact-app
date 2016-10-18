/**
 * Created by karol on 18.10.16.
 */
import React from 'react'
import './Info.css'

export default (props) =>
    <div id="info">
        <img id="pic1" src={props.pic} />
        <div id="text_maxi" >
            <p>Adres: {props.adres}</p>
            <p>Otwarte codziennie w godzinach : {props.opened}</p>
            <p>{props.info}</p>
            <p>{props.link}</p>
        </div>
    </div>