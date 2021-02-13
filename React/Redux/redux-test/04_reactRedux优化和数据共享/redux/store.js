import {createStore,applyMiddleware,combineReducers} from 'redux'
import  thunk from 'redux-thunk'
import countReducer from './count/reducer'
import personReducer from './person/reducer'

const allReducers = combineReducers({he:countReducer,rens:personReducer})

export default createStore(allReducers,applyMiddleware(thunk))