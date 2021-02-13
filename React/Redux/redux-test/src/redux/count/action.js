import {
    ADD3
} from '../constant'
import store from '../store'
export function add(data) {
    return {
        type: ADD3,
        data
    }
}

export function addAsync(data) {
    return () => {
        setTimeout(() => {
            store.dispatch(add(data))
        }, 1000)
    }
}