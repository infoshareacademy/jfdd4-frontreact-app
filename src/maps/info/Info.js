/**
 * Created by karol on 18.10.16.
 */
import React from 'react'
import './Info.css'

export default (props) =>
    <div id="info">
        <img id="pic1" src={props.pic}/>
        <div id="text_maxi" >
            <p>Otwarte codziennie w godzinach : {props.opened}</p>
            <p></p>
            <p>{props.info}</p>
            <p></p>
            <a href={props.link}>Strona Sklepu</a>
        </div>
    </div>