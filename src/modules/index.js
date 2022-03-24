import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers'

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
