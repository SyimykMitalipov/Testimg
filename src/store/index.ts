import { rootReducer } from './reducer/index';
import { applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { createStore } from 'redux';


const store = createStore(rootReducer,applyMiddleware(thunk))


export default store;

