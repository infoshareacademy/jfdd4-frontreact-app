import React from 'react'
import './Place.css'

export default (props) =>
    <div id="icon" >
        <img id="pic2" src={props.icon} onClick={function(){
            props.selectShop(props.shopId)
         }}/>   
        <div id="text_mini" >
            <p>Adres: {props.adres}</p>
            <p>Otwarte codziennie w godzinach : {props.opened}</p>
        </div>
    </div>


    