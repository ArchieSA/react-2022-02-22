import { combineReducers } from 'redux';
import { basketReducer } from './basket-reducer';
import { restaurantReducer } from './restaurant-reducers';
import { productReducer } from './product-reducers';
import { reviewReducer } from './review-reducers';
import { userReducer } from './user-reducers';

export const rootReducer = combineReducers({
    basket: basketReducer,
    restaurants: restaurantReducer,
    products: productReducer,
    reviews: reviewReducer,
    users: userReducer
});