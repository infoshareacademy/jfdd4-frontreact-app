import { INCREMENT, DECREMENT} from './actionTypes'


export default (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case INCREMENT:
            return state + action.payload
        case DECREMENT:
            if (state > 0 ){
                return state - action.payload}
            else {
                return state = 0
            }
        default:
            return state
    }
}
  