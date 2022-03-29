import { combineReducers } from 'redux';
import { basketReducer } from './basket-reducer';
import { restaurantReducer } from './restaurant-reducers';
import { productReducer } from './product-reducers';
import { loginReducer } from './login-reducer';
import { userReducer } from './user-reducer';
import { reviewReducer } from './review-reducer';

export const rootReducer = combineReducers({
    basket: basketReducer,
    login: loginReducer,
    user: userReducer,
    restaurants: restaurantReducer,
    products: productReducer,
    reviews: reviewReducer
});