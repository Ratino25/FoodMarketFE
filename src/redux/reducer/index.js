import { combineReducers } from "redux";
import {registerReducer} from './auth';
import {globalReducer} from './global';


const recuder = combineReducers({
    registerReducer,
    globalReducer
});

export default recuder;