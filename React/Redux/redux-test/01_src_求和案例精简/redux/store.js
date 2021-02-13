//引入创建store的函数
import {createStore} from 'redux'
//引入为组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)