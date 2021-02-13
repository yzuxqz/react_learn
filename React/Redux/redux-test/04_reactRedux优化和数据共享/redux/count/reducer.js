import {
    INCREMENT2,
    DECREMENT2,
    JIAODD,
    JIAASYNC
} from '../constant'
let initState = 1
export default function (preState = initState, action) {
    const {
        type,
        data
    } = action
    switch (type) {
        case INCREMENT2:
            return preState + data * 1
        case DECREMENT2:
            return preState - data * 1
        case JIAODD:
           if(preState%2 !== 0){
               console.log(data);
            return preState + data*1
           }
           
           else return preState
        case JIAASYNC:
            return preState + data*1
        default:
            return preState
    }
}