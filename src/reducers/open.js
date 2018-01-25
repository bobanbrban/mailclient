import * as actionTypes from '../actions/actionCreators'


export function openmail(state = [], action) {
  switch(action.type) {
    case actionTypes.OPEN_MAIL:

     return Object.assign({},state,{
       ...state
     });

      default:
         return state;

}}
