import React, { Component } from 'react';
import MailItem from './MailItem';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';


class MailList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showRight: false,
      setReaded: false,
      setTrash: false,
    };
  }

  handleChange = () => {
   this.setState({setReaded: true});
  }

  clickBack = () => {
    const {setReaded}=this.state;
    this.setState({setReaded: !setReaded});
  }

  clickTrash = () => {
    const {setTrash}=this.state;
    const {showRight}= this.state;
    this.setState({setTrash: true});
    this.setState({showRight: !showRight});
  }

    handleClick = () => {
     this.setState({showRight: true});
    }

    clickSpam = () => {
      const {setSpam}=this.state;
      this.setState({setSpam: !setSpam});
    }

    onClickTrash = () => {
       const { onSetTrash } = this.props;
       onSetTrash();
    }

    onClickSpam = () => {
       const { onSetSpam } = this.props;
       onSetSpam();
    }

    render() {
      const {setReaded}= this.state;
      const {showRight}= this.state;
      const {setSpam}=this.state;
      const {setTrash}=this.state;
      const { state } = this.props;
      let MailItems;
      let mailstest= [this.props.mailList[0]];
      if(mailstest) {
         MailItems = mailstest.map(mail => {
          return (
          <li className="mail1" id="mailRight" ><MailItem clickSpam={this.clickSpam} clickBack={this.clickBack} clickTrash={this.clickTrash} showRight={showRight} setReaded={setReaded} onReadedClick={this.handleChange} clickTrash={this.clickTrash} clickBack={this.clickBack}  onClick={this.handleClick} key={mail.id} mail={mail} /></li>
        );
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
