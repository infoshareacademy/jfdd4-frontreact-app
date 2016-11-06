/**
 * Created by kbro2 on 30.10.2016.
 */


import {
    RECEIVE_LIST, OPEN_MODAL, CLOSE_MODAL

} from './actionTypes'

import fetch from 'isomorphic-fetch'



export function fetchList() {
    return function (dispatch) {
        return fetch('http://rest.learncode.academy/api/sugero/lists')
            .then(response => response.json())
            .then(list => dispatch({
                type: RECEIVE_LIST,
                list: list
            }))
    }}

export function openModal(result) {
    return {
        currentResult: result,
        type: OPEN_MODAL
    };
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    };
}
