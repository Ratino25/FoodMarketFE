import { combineReducers } from "redux";
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';


const recuder = combineReducers({
    registerReducer,
    globalReducer,
    photoReducer
});

export default recuder;