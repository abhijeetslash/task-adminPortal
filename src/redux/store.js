import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { userListReducer } from './reducers/userReducers'

const rootReducer = combineReducers({
    userList: userListReducer
});

const middlewares = [thunk];

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;