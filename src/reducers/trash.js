// import * as actionTypes from '../actions/actionCreators';


// export function settrash(state = [], action) {
//   switch(action.type) {
//     case actionTypes.SET_TRASH:
//      return state.map(item=>{
//       if(item.id === action.id)
//         item.isTrash=true;
//       return item
//      });
//       default:
//          return state;
//   }
// }



// export function settrash(state = [], action) {
//   switch(action.type) {
//     case actionTypes.SET_TRASH:
//    const { Map } = require('immutable')
//     const originalMap = Map(state[0]);
//     const updatedMap = originalMap.set('isTrash', true);
//     const updatedMaptwo = updatedMap.set('visibilityFilter',"SHOW_TRASH")
//     const jsUpdated = updatedMaptwo.toJS();
//           return Object.assign({},state,{
//             2:
//                   jsUpdated
//                 });

//       default:
//          return state;
//   }
// }

