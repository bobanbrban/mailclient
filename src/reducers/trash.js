import * as actionTypes from '../actions/actionCreators'


export function settrash(state = [], action) {
  switch(action.type) {
    case actionTypes.SET_TRASH:
          return [
            ...state,
            {
              IsTrash: true
            }
          ]

      default:
         return state;
  }
}
