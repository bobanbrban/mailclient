import * as actionTypes from '../actions/actionCreators'


export function setreaded(state=[],action) {
  switch(action.type) {
    case actionTypes.SET_READED:
          return Object.assign(
              ...state
              ,
              {
              isReaded: true
              });

            default:
               return state;
  }
}
