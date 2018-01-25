import React from 'react';
import FaTrash from 'react-icons/lib/fa/trash';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaBug from 'react-icons/lib/fa/bug';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';
import MailList from './MailList';
import MailItem from './MailItem';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';


export class mainHeader extends React.Component {

componentWillMount() {
  const { getMail } = this.props;
  getMail();
}

componentDidMount() {
       function mailsInterval() {
      let mailLi = document.createElement("div");
      var itm = document.getElementById("cloneTest").firstChild;
      var cln = itm.cloneNode(true);
      mailLi.appendChild(cln);
      document.getElementById("myList").appendChild(mailLi);
 }
      setInterval(function(){
         mailsInterval();
      },5000);
   console.log();
}


     render() {
       const { state } = this.props;
       //onClick={() => getMail()}
           return (
                 <div>
                       <div className="mailListHeader">
                         <span className="Inbox-link"><NavLink to='/Inbox'   activeStyle={{ color: '#4990E2' }} ><FaInbox className= "Icon"/>Inbox</NavLink></span>
                         <span className="Trash-link"><NavLink to='/Trash'  activeStyle={{ color: '#4990E2' }}><FaTrash className= "Icon" />Trash</NavLink></span>
                         <span className="Spam-link"><NavLink to='/Spam'  activeStyle={{ color: '#4990E2' }}><FaBug className= "Icon" />Spam</NavLink></span>
                       </div>
                       <div id="cloneTest" className="mailsList">
                          <MailList  mailList={state.mailsdata}/>
                          <div id="myList">
                          </div>
                       </div>
                   </div>
            );
      }
 }

       const mapStateToProps = state =>  ({
         state
       });
       const mapDispachToProps = dispatch=> ({
         getMail: (index) => dispatch({type: actionTypes.GET_MAIL, index}),
         openMail: (index) => dispatch({type: actionTypes.OPEN_MAIL, index})
       });

const storeApp = connect(mapStateToProps, mapDispachToProps)(mainHeader);



export default storeApp;
