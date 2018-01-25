//
// import React from 'react';
// import FaTrash from 'react-icons/lib/fa/trash';
// import FaInbox from 'react-icons/lib/fa/inbox';
// import FaBug from 'react-icons/lib/fa/bug';
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actionTypes from '../actions/actionCreators';
// import {maildata} from '../reducers/mailData'
//
//
//
//
//
//
// export class mainHeader extends React.Component {
//
//
//
//   constructor(){
//     super();
//     this.state = {
//       maildata:[],
//     }
//   }
//
//    getMailList(){
//      const data = this.props;
//      this.setState({maildata: data} , function(){
//          console.log(this.state);
//      })
//    }
//
//
// componentWillMount() {
//    this.getMailList();
//    console.log();
//
// }
//
// componentDidMount() {
//    this.getMailList();
// }
//
//      render() {
//
//
//     const { getMail } = this.props;
//      console.log();
//
//         return (
//              <div className="mailListHeader">
//                 <span className="Inbox-link"><NavLink to='/Inbox' onClick={() => getMail()}  activeStyle={{ color: '#4990E2' }} ><FaInbox className= "Icon"/>Inbox</NavLink></span>
//                 <span className="Trash-link"><NavLink to='/Trash'  activeStyle={{ color: '#4990E2' }}><FaTrash className= "Icon" />Trash</NavLink></span>
//                 <span className="Spam-link"><NavLink to='/Spam'  activeStyle={{ color: '#4990E2' }}><FaBug className= "Icon" />Spam</NavLink></span>
//             </div>
//
//               );
//            }
//        }
//
//        const mapStateToProps = state =>  ({
//          state
//        });
//
//        const mapDispachToProps = dispatch=> ({
//          getMail: (index) => dispatch({type: actionTypes.GET_MAIL, index})
//        });
//
//
//
//
//
// const storeApp = connect(mapStateToProps, mapDispachToProps)(mainHeader);
// //mainHeader = connect(mapStateToProps, mapDispachToProps)
//
//
// export default storeApp;
//
// <MailList mails={state.maildata}>
// ,<MailItem /> //children
// </MailList>
//
// <span className="Inbox-link"><NavLink to='/Inbox'  onClick={() => getMail()}  activeStyle={{ color: '#4990E2' }} ><FaInbox className= "Icon"/>Inbox</NavLink></span>
//
//
// constructor(){
//   super();
//   this.state = {
//     maildata:[],
//   }
// }
