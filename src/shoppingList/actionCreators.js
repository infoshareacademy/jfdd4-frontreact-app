/**
 * Created by kbro2 on 30.10.2016.
 */


import {
    GET_ITEMS,
    RECEIVE_ITEMS,

} from './actionTypes'

import fetch from 'isomorphic-fetch'



export function fetchItems() {
    return function (dispatch) {
        return fetch('http://rest.learncode.academy/api/sugero/list')
            .then(response => response.json())
            .then(items => dispatch({
                type: RECEIVE_ITEMS,
                items: items
            }))
    }}

export function deleteItem(itemId) {
    return function (dispatch) {
        return fetch('http://rest.learncode.academy/api/sugero/list/' + itemId, {
            method: 'DELETE'
        })
            .then(response => dispatch(fetchItems()))
    }
}