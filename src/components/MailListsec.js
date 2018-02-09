import React, { Component } from 'react';
import MailItemsecond from './MailItemsecond';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class MailListsec extends Component {
  render() {
    let MailItemssec;
    let mailstestsec= [this.props.mailList[1]];
    if(mailstestsec) {
       MailItemssec = mailstestsec.map(mail => {
        return (
          <li className="mail1" id="mailRight2" ><MailItemsecond  key={mail.id} mail={mail} /></li>
       );
      });
    }
   return  (
      <div className="mailList">
       {MailItemssec}
      </div>
      );
  }
}
export default MailListsec;
