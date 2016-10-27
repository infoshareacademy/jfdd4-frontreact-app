import { finalState } from '../data/dataShops'

const initialState = {
    shops:finalState.shops
}




export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}