import { ADD, REMOVE} from './actionTypes'


export function increment(value = 1) {
    return {
      type: ADD,
      payload: value
    }
}

export function decrement(value = 1) {
    return {
      type: REMOVE,
      payload: value
    }
}