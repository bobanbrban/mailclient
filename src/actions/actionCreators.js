
export const GET_MAIL = 'GET_MAIL';
export const REMOVE_MAIL = 'REMOVE_MAIL' ;
export const OPEN_MAIL = 'OPEN_MAIL' ;
export const SET_READED = 'SET_READED' ;
export const SET_TRASH = 'SET_TRASH' ;
export const SET_SPAM = 'SET_SPAM' ;
export const SET_INBOX = 'SET_INBOX' ;
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' ;

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
