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
            <a id="link1" target="_blank" href={props.link}>Strona Sklepu</a>
            <a id="link2" href="/shops">Dodaj do ulubionych</a>
        </div>
    </div>/**
 * Created by Beata on 06.11.2016.
 */
