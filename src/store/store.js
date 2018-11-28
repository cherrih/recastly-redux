import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReduce,
    initialState,
    applyMiddleware(...middleware)
);

export default store;