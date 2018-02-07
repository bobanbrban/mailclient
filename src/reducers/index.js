import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { mailsdata } from './mailData';
import { settrash } from './trash';
import { setspam } from './spam';

import { visibilityFilter } from './visibilityFilter';


export const rootReducer = combineReducers({mailsdata,setspam,settrash,visibilityFilter, routing: routerReducer});
