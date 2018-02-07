import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaBug from 'react-icons/lib/fa/bug';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';
import MailList from './MailList';
import MailItem from './MailItem';
import MailListsec from './MailListsec';
import * as MailImage from '../assets/mail.svg';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';



class Inbox extends React.Component {

 constructor(props){
   super(props);
   this.state= [];
 }

  componentWillMount() {
    const { getMail } = this.props;
    getMail();
  }

  componentDidMount() {
        //   function mailsInterval() {
        // let mailLi = document.createElement("div");
        // var itm = document.getElementById("cloneTest1");
        // var cln = itm.cloneNode(true);
        // mailLi.append(cln);
        // document.getElementById("cloneTest").appendChild(mailLi);
        // }
        // setInterval(() => {
        //        mailsInterval();
        //      }, 5000);
  }


    render() {
      const { state } = this.props;
      const mailstest = [state.mailsdata[0]];
      const mailstest2 = [state.mailsdata[1]];

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
                <MailListsec mailList={state.mailsdata}/>             
              </div>
           );  
        };
      }) 
       
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
 const mapDispachToProps = dispatch=> ({
   getMail: () => dispatch({type: actionTypes.GET_MAIL}),
 });

const inboxApp = connect(mapStateToProps, mapDispachToProps)(Inbox);

export default inboxApp;
