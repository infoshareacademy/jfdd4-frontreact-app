/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
} from './actionTypes'

import fetch from 'isomorphic-fetch'

export function fetchAmounts () {
    return function (dispatch) {
    return fetch(`${process.env.PUBLIC_URL}/data/amounts.json`)
        .then(response => response.json())
        .then(amounts => dispatch({
            type: RECEIVE_AMOUNTS,
            amounts: amounts
        }))
}}
