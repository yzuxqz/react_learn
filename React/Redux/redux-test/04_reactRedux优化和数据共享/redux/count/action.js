import store from '../store'
import {
    INCREMENT2,
    DECREMENT2,
    JIAODD,
    JIAASYNC
} from '../constant'
export function increment(data) {
    return {
        type: INCREMENT2,
        data
    }
}
export function decrement(data) {
    return {
        type: DECREMENT2,
        data
    }
}
export function jiaOdd(data) {
    return{
        type:JIAODD,
        data    
    }
  }
  export function jiaAsync(data) {
    return ()=>{
        setTimeout(()=>{
            store.dispatch(increment(data))
        },1000)
    }
  }