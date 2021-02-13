import {ADDPERSON} from '../constant'
const initState = [{name:'xqz',age:12}]
export default function (presState=initState,action) { 
    const {type,data} = action
    switch (type) {
        case ADDPERSON:
            return [data,...presState]
        default:
            return presState
    }
 }