import { connect } from 'react-redux'
import { toggleMail } from '../actions'
import MailList from '../components/MailList'

const getVisibleTodos = (mails, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return mails.filter(mail => mail.isInbox)
    case 'SHOW_TRASH':
      return mails.filter(mail => mail.isTrash)
    case 'SHOW_SPAM':
      return mails.filter(mail => mail.isSpam)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  mails: getVisibleTodos(state.MailList, state.visibilityFilter)
})

const mapDispatchToProps = {
  onMailClick: toggleMail
}

const VisibleMailList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailList)

export default VisibleMailList
