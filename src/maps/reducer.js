import { RECEIVE_MAPS, REQUEST_MAPS } from './actionTypes'


const initialState = {
    coordinate: [],
    fetchingMaps: false
}


export default (state=initialState, action) => {
    switch (action.type) {
        case REQUEST_MAPS:
            return Object.assign({}, state, {
                fetchingMaps: true
            })
        
        case RECEIVE_MAPS:
            return Object.assign({}, state, {
                coordinate: action.coordinate,
                fetchingMaps: false
            })
        default:
            return state
    }
}