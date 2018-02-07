import React, { Component } from 'react';
import MailItemthird from './MailItemthird';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class MailListthird extends Component {

constructor(props) {
  super(props);
  this.state = {
    showRight: false,
    setReaded: false,
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
  const {showRight}= this.state;
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


  render() {
    const {setReaded}= this.state;
    const {showRight}= this.state;
    let MailItemsthird;
    let mailstestthird= this.props.mailList;
    console.log('testmaillistthird',this.props.mail);
    if(mailstestthird) {
       MailItemsthird = mailstestthird.map(mail => {
         console.log();
        return (
          <li className="mail1" id="mailRight2" ><MailItemthird clickSpam={this.clickSpam} clickTrash={this.clickTrash} showRight={showRight} setReaded={setReaded} clickBack={this.clickBack} onReadedClick={this.handleChange} onClick={this.handleClick} key={mail.id} mail={mail} /></li>
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
