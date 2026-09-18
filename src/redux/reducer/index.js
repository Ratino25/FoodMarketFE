import { combineReducers } from "redux";
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';

const recuder = combineReducers({
    registerReducer,
    globalReducer,
    photoReducer,
    homeReducer
});

export default recuder;