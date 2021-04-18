import { deletePhone } from '../../../redux/Phonebook/phoneBook-operations';
import { connect } from 'react-redux';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../../redux/Phonebook/phoneBook-selectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => () => dispatch(deletePhone(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList);
