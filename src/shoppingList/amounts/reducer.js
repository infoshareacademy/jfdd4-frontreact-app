import {
    GET_AMOUNTS,
    RECEIVE_AMOUNTS,
} from './actionTypes'

const initialState = {
    availableFilters: ['all', 'males', 'females'],
    activeFilterName: 'all',
    amounts: [],
    fetchingAmounts: false,

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_AMOUNTS:
            return Object.assign({}, state, {
                fetchingAmounts: true
            })
        case RECEIVE_AMOUNTS:
            return Object.assign({}, state, {
                students: action.students,
                fetchingAmounts: false
            })
        default:
            return state
    }
}