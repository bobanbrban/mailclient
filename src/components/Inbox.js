import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';
import MailList from './MailList';
import MailListsec from './MailListsec';
import MailListthird from './MailListthird';
import * as MailImage from '../assets/mail.svg';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';



class Inbox extends React.Component {
  componentWillMount() {
    const { getMail } = this.props;
    getMail();
  }
  componentDidMount() {
         function mailsInterval() {
        let itm = document.querySelector("#clonerender");
        let cln = itm.cloneNode(true);
        document.getElementById("cloneTest").appendChild(cln);
      }
         setInterval(() => {
               mailsInterval();
             }, 90000);                
  }
  render() {
      const { state } = this.props;
      const mailstest = [state.mailsdata[0]];
      const mailstest2 = [state.mailsdata[1]];
      const mailstest3 = [state.mailsdata[0]];
      console.log('testmailstest3',mailstest2);
       const InboxList = mailstest.map(mail=>{
       if((mail.isTrash === false)&&(mail.isSpam === false)) {
          return (
              <div>
                <MailList mailList={state.mailsdata}/>              
              </div>
           );
        };
      }) 
    const InboxList2 = mailstest2.map(mail=>{
       if((mail.isTrash === false)&&(mail.isSpam === false)) {
          return (
              <div>
                <MailListsec mailList={state.mailsdata} key={mail.id}/>             
              </div>
           );  
        };
      }) 
  const InboxList3 = mailstest3.map(mail=>{
          return (
              <div>
                <MailListthird mailList={state.mailsdata} key={mail.id}/>             
              </div>
           );  
      }) 
      return (
          <div>
            <div id="cloneTest" className="mailsList">
              {InboxList}
              {InboxList2}
              <div style={{display:'none'}}>
               <div id="clonerender">
                {InboxList3}
               </div>
              </div>
            </div> 
          <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
        </div>
        )    
    }
 }  
 const mapStateToProps = state =>  ({
   state
 });
 const mapDispachToProps = dispatch=> ({
   getMail: () => dispatch({type: actionTypes.GET_MAIL}),
 });
const inboxApp = connect(mapStateToProps, mapDispachToProps)(Inbox);

export default inboxApp;
