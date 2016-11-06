import { REQUEST_COORDINATE, RECEIVE_COORDINATE } from './actionTypes'
import fetch from 'isomorphic-fetch'
import React from 'react'
import store from '../store';

function requestCoordinate () {
    return {
        type: REQUEST_COORDINATE
    }
}

function receiveCoordinate (coordinate) {
    return {
        type: RECEIVE_COORDINATE,
        coordinate: coordinate
    }
}

export function fetchCoordinate() {
    return function (dispatch) {
        dispatch(requestCoordinate());
        getLocation()
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
      " " + "Longitude: " + position.coords.longitude);
    coordinateReceived(position);
}


export function coordinateReceived(position) {
    console.log('tu 1' );
    // return function (dispatch) {
        console.log('tu 2' );
        store.dispatch(receiveCoordinate(position));
    // }
}

