// import * as actionTypes from '../actions/actionCreators';


// export function setspam(state = [], action) {
//   switch(action.type) {
//     case actionTypes.SET_TRASH:
//           return Object.assign({},state,[
//                   ...state,
//                   { 
//                   isTrash: 'true'
//                   }
//                 ]);

//       default:
//          return state;
//   }
// }




// import { mailData } from '../data/mail-data';
// import * as actionTypes from '../actions/actionCreators';
// import { VisibilityFilters } from '../actions/actionApp';


// const Trash = {isTrash: false};
// const Spam = {isSpam: false};
// const mail1 = mailData[0];
// const mail2 = mailData[1];

// const initalState = [{...mail1,...Trash,...Spam,visibilityFilter: VisibilityFilters.SHOW_ALL},{...mail2,...Trash,...Spam,visibilityFilter: VisibilityFilters.SHOW_ALL},{}];

// export function setspam(state = initalState, action) {
//   switch(action.type) {
//      case actionTypes.SET_SPAM:
//      const { Map } = require('immutable');
//       const originalMapsec = Map(state[0]);
//       const updatedMap1 = originalMapsec.set('isSpam', true);
//       const updatedMap2 = updatedMap1.set('visibilityFilter',"SHOW_SPAM")
//       const jsUpdated1 = updatedMap2.toJS();
//            return Object.assign({},state,{
//              2:
//                    jsUpdated1
//                  });
//      case actionTypes.SET_VISIBILITY_FILTER:
//             return Object.assign([],state[0], {
//               visibilityFilter: action.filter
//            })
//       default:
//          return state;
//   }
// }
