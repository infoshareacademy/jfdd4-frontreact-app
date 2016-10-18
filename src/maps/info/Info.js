/**
 * Created by karol on 18.10.16.
 */
import React from 'react'
import './Info.css'

export default (props) =>
    <div id="info">
        <img id="pic1" src={props.pic} data-toggle="modal" data-target="#myModal" />
        <div id="text_maxi" >
            <p>Adres: {props.adres}</p>
            <p>Otwarte codziennie w godzinach : {props.opened}</p>
            <p>{props.info}</p>
            <a href={props.link}>Strona Sklepu</a>
        </div>
    </div>