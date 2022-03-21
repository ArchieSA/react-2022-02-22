import {combineReducers} from 'redux';
import {basketReducer} from './basket-reducer';
import {loginReducer} from './login-reducer';
import {userReducer} from './user-reducer';

export const rootReducer = combineReducers({
    basket: basketReducer,
    login: loginReducer,
    user: userReducer,
});