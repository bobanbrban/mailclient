import React, { Component } from 'react';
import MailItemthird from './MailItemthird';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class MailListthird extends Component {
  render() {
    let MailItemsthird;
    let mailstestthird= this.props.mailList;
    if(mailstestthird) {
       MailItemsthird = mailstestthird.map(mail => {
        return (
          <li className="mail1" id="mailRight2" ><MailItemthird key={mail.id} mail={mail} /></li>
       );
      });
    }
   return  (
      <div className="mailList">
       {MailItemsthird}
      </div>
      );
  }
}
export default MailListthird;
