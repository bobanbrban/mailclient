import React, { Component } from 'react';
import MailItem from './MailItem';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class MailList extends Component {

    render() {
      let MailItems;
      let mailstest= this.props.mailList;
      if(mailstest) {
         MailItems = mailstest.map((mail,i) => {
          if((mail.isTrash === false)&&(mail.isSpam === false)) {
          return (
          <li className="mail1" id="mailRight" ><MailItem {...this.props} key={i} i={i} mail={mail} /></li>
        )};
      });
    } 
    return  (
     <div className="mailList">
       {MailItems}
      </div>
       );
   }
}
export default MailList;
