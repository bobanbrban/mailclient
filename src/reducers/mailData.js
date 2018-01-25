import { mailData } from '../data/mail-data';
import * as actionTypes from '../actions/actionCreators';


export function mailsdata(state = [], action) {
  switch(action.type) {
    case actionTypes.GET_MAIL:

     return Object.assign(mailData,state,{
       ...state
     });

      default:
         return state;

}}
