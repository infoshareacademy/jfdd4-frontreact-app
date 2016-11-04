import { RECEIVE_MAPS, REQUEST_MAPS} from './actionTypes'
import fetch from 'isomorphic-fetch'


function requestMaps () {
    return {
        type: REQUEST_MAPS
    }
}

function receiveMaps (coordinate) {
    return {
        type: RECEIVE_MAPS,
        coordinate: coordinate
    }
}

export function fetchMaps () {
    return function (dispatch) {
        dispatch(requestMaps())
        return fetch(`${process.env.PUBLIC_URL}/data/shops.json`)
            .then(response => response.json())
            .then(coordinate => dispatch(receiveMaps(coordinate)))
    }
}
