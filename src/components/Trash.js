import React from 'react';
import { connect } from 'react-redux';
import MailList from './MailList';
import MailListsec from './MailListsec';
import * as MailImage from '../assets/mail.svg';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class Trash extends React.Component {  
    render() {
      const { state } = this.props;
      const mailstest = [state.mailsdata[0]];
      const mailstest2 = [state.mailsdata[1]];
       const InboxList = mailstest.map(mail=>{
       if(mail.isTrash === true) {
          return (
              <div>
                <MailList mailList={state.mailsdata}/>              
              </div>
           );
        };
      })     
    const InboxList2 = mailstest2.map(mail=>{
       if(mail.isTrash === true) {
          return (
              <div>
                <MailListsec mailList={state.mailsdata}/>             
              </div>
           );  
        };
      })
      console.log('testInboxList2',InboxList2);  
      return (
          <div>
            <div id="cloneTest" className="mailsList">
              {InboxList}
              {InboxList2}
            </div> 
          <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
        </div>
        )    
    }
 }  
 const mapStateToProps = state =>  ({
   state
 });
const trashApp = connect(mapStateToProps)(Trash);

export default trashApp
