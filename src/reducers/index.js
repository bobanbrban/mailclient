import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { maildata } from './mailData';


export const rootReducer = combineReducers({maildata, routing: routerReducer});
