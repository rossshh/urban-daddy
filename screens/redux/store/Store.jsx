import { createStore } from 'redux';
import { Reducer1 } from '../reducers/Reducer1';
import { Reducer2 } from '../reducers/Reducer2';
import { combineReducers } from 'redux';
const routeReducer=combineReducers({Reducer1,Reducer2});

const store=createStore(routeReducer);

export default store;