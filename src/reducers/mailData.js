import { mailData } from '../data/mail-data'


export function maildata(state = [], action) {
  return [
    ...state,
    {
    mailData
    }
  ]
  }
