/**
 * Created by kbro2 on 30.10.2016.
 */


import {
    GET_ITEMS,
    RECEIVE_ITEMS,
    SAVE_LIST_BEGIN,
    SAVE_LIST_END

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

//save list

function saveListBegin() {
    return {
        type: SAVE_LIST_BEGIN
    }
}

function saveListEnd() {
    return {
        type: SAVE_LIST_END
    }
}

export function saveList(shoppingList, name) {
    return function (dispatch) {
        dispatch(saveListBegin())
        return fetch('http://rest.learncode.academy/api/sugero/lists', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shoppingList: shoppingList,
                name: name
            })
        })
            .then(response => response.json())
            .then(listName => {
                dispatch(saveListEnd())
            })
    }
}