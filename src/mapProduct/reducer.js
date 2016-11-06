import { REQUEST_COORDINATE, RECEIVE_COORDINATE } from './actionTypes'

const initialState = {
    coordinate: null,
    fetchingCoordinate: false,
}



export default (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case REQUEST_COORDINATE:
            return Object.assign({}, state, {
                fetchingCoordinate: true
            })
        case RECEIVE_COORDINATE:
            return Object.assign({}, state, {
                coordinate: action.coordinate,
                fetchingCoordinate: false
            })
        default:
            return state
    }
}
