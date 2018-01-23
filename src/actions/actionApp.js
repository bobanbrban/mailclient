import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMail } from '../actions/actionCreators';
import mainHeader from '../components/mainHeader';

function mapStateToProps(state) {
  return state
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(getMail, dispatch);
}

const storeApp = connect(mapStateToProps, mapDispachToProps)(mainHeader);

export default storeApp;
