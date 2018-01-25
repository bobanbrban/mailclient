import * as actionTypes from '../actions/actionCreators'


export function removemail(state = [], action) {
  switch(action.type) {
    case actionTypes.REMOVE_MAIL:

     return Object.assign({},state,{
       ...state
     });

      default:
         return state;

}}
