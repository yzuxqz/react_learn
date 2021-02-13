import { ADDASYNC } from "../../../src copy1/redux/constant";

import {ADD3} from '../constant'
const initState = 0
export default function (preState=initState,action) { 
    const {type,data} = action
    switch (type) {
        case ADD3:
            return preState+data*1
        default:
            return preState
    }
 }
