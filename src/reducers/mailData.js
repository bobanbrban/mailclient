import { mailData } from '../data/mail-data';
import * as actionTypes from '../actions/actionCreators';

const Trash = {isTrash: false};
const Spam = {isSpam: false};
const Right = {showRight: false};
const mail1 = mailData[0];
const mail2 = mailData[1];

const initalState =
  [{...mail1,...Trash,...Spam,...Right},{...mail2,...Trash,...Spam,...Right}];

export function mailsdata(state = initalState, action) {
  switch(action.type) {
    case actionTypes.GET_MAIL:
     return state;
   case actionTypes.SET_TRASH:
     return state.map(item=>{
      if(item.id === action.id)
        item.isTrash=true;
      return item
    });
   case actionTypes.SET_SPAM:
     return state.map(item=>{
      if(item.id === action.id)
        item.isSpam=true;
      return item
     });
   case actionTypes.SET_READED:
     return state.map(item=>{
      if(item.id === action.id)
        item.isReaded=true;
      return item
    });
   case actionTypes.SET_READED_BACK:
     return state.map(item=>{
      if(item.id === action.id)
        item.isReaded=false;
      return item
    });
  case actionTypes.SET_RIGHT:
     return state.map(item=>{
      if(item.id === action.id)
        item.showRight=true;
      return item
     });
      default:
         return state;
  }
}

// const { Map } = require('immutable')
    //  const originalMap = Map(state[0]);
    //  const updatedMap = originalMap.set('isTrash', true);
    //  const updatedMaptwo = updatedMap.set('visibilityFilter',"SHOW_TRASH")
    //  const jsUpdated = updatedMaptwo.toJS();
    //        return Object.assign({},state,{
    //          2:
    //                jsUpdated
    //              });