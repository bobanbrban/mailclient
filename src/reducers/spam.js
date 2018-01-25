import * as actionTypes from '../actions/actionCreators'


export function setspam(state = [], action) {
  switch(action.type) {
    case actionTypes.SET_SPAM:
          return [
            ...state,
            {
              IsSpam: true
            }
          ]

      default:
         return state;

   }
}
