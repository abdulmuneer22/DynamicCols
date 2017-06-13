import { combineReducers } from 'redux';
import ColCountReducer from './ColCountReducer';
import ColViewReducer from './ColViewReducer';
export default combineReducers({
    ColCountReducer,
    ColViewReducer
})