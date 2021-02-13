import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../redux/count/reducer'
import personReducer from '../redux/person/reducer'
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducer = combineReducers({he:countReducer,persons:personReducer})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))