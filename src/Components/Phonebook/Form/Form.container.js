import { connect } from 'react-redux';
import { addPhone } from '../../../redux/Phonebook/phoneBook-operations';
import Form from './Form';
import { getContacts } from '../../../redux/Phonebook/phoneBook-selectors';

const mapStateToProps = state => ({
  contactName: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addPhone(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
