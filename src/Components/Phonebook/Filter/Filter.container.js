import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/Phonebook/phoneBook-action';
import Filter from './Filter';
import { getFilter } from '../../../redux/Phonebook/phoneBook-selectors';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
