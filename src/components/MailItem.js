import React, { Component } from 'react';
import FaCircle from 'react-icons/lib/fa/circle';
import FaUser from 'react-icons/lib/fa/user';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';



class MailItem extends Component {







  render() {
    return (
       <div className="mailItems" id="mailRight">
             <span className="Sender"><FaUser className="User" /><span className="senderName">{this.props.mail.from}</span></span><span className="Date">{this.props.mail.date}</span><br/>
             <span className="Title"><FaCircle className="Circle" />{this.props.mail.title}</span><br/>
             <span className="mailBodyList">{this.props.mail.body}</span><br/>
             <span className="Subject">{this.props.mail.subject}</span><br/>
             <span className="To">{this.props.mail.to}</span><br/>
             <span className="Tag">{this.props.mail.tag}</span><br/>
             <span className="IsReaded">{this.props.mail.IsReaded}</span>
         <div id="rightHidden" className="rightSide" style={{display: 'block'}}>
            <div className="Project">
             <h5><span className="fromMain">{this.props.mail.from}</span><span className="dateMain">{this.props.mail.date}</span></h5><br/>
             <span className="titleMain">{this.props.mail.title}</span><br/>
             <span className="mailBodyList1">{this.props.mail.body}</span><br/>
             <span className="Subject1">{this.props.mail.subject}</span><br/>
             <span className="To1">{this.props.mail.to}</span><br/>
             <span className="Tag1">{this.props.mail.tag}</span><br/>
            </div>

         </div>
      </div>
    );
  }
}


export default MailItem;
