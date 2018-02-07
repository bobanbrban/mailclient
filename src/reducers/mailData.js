import { mailData } from '../data/mail-data';
import * as actionTypes from '../actions/actionCreators';
import { VisibilityFilters } from '../actions/actionApp';


const Trash = {isTrash: false};
const Spam = {isSpam: false};
const Visibility = {visibility: "SHOW_ALL"};
const mail1 = mailData[0];
const mail2 = mailData[1];

const initalState =
  [{...mail1,...Trash,...Spam,...Visibility},{...mail2,...Trash,...Spam,...Visibility}];

export function mailsdata(state = initalState, action) {
  switch(action.type) {
    case actionTypes.GET_MAIL:
     return state;

      case actionTypes.SET_TRASH:
      console.log('teststate',action);
     return state.map(item=>{
      console.log('testitem',item.id);
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

     case actionTypes.SET_VISIBILITY_FILTER:
            return Object.assign([],state, {
              visibilityFilter: action.filter
           })
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