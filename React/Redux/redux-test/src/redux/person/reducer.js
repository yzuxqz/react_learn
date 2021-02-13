import { ADD } from '../../../src copy1/redux/constant';
import {ADDPERSON3} from '../constant'
const initState = [{name:'xqz',age:12}]
export default function (preState=initState,action) {
    const {type,data} =action
    switch (type) {
        case ADDPERSON3:
            return [...data,preState]
        default:
            return preState
    }
  }