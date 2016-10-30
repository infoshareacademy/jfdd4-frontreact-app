/**
 * Created by kbro2 on 30.10.2016.
 */
import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
} from './actionTypes'
import fetch from 'isomorphic-fetch'

function getAmounts() {
    return {
        type: GET_AMOUNTS
    }
}

function receiveAmounts(amounts) {
    return {
        type: RECEIVE_AMOUNTS,
        amounts: amounts
    }
}

export const fetchAmounts = () => dispatch => {
    dispatch(requestAmounts())
    return fetch(`${process.env.PUBLIC_URL}/data/dataProducts.json`)
        .then(response => { console.log(response); return response.json()})
        .then(json => { console.log(json); return dispatch(receiveAmounts(json))})
}