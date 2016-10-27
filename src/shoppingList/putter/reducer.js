/**
 * Created by kbro2 on 27.10.2016.
 */
import { ADD, REMOVE} from './actionTypes'


export default (state = 0, action) => {
    console.log(action)
    switch (action.type) {
        case ADD:
            return state + action.payload
        case REMOVE:
            if (state > 0 ){
                return state - action.payload}
            else {
                return state = 0
            }
        default:
            return state
    }
}