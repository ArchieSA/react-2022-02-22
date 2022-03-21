import {combineReducers} from 'redux';
import {basketReducer} from './basket-reducer';
import {userReducer} from "./user-reducer";

export const rootReducer = combineReducers({
    basket: basketReducer,
    user: userReducer
});