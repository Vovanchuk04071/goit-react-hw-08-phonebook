import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../Components/Phonebook/Form';
import style from './PhoneBookView.module.css';
import Filter from '../../Components/Phonebook/Filter';
import ContactList from '../../Components/Phonebook/ContactList';
import CancelBtn from '../../Components/Phonebook/CancelBtn';
import { fetchContact } from '../../redux/Phonebook/phoneBook-operations';
import {
  getLoading,
  getContacts,
} from '../../redux/Phonebook/phoneBook-selectors';

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { isLoadingContacts, contacts } = this.props;

    return (
      <>
        <div className={style.wraper}>
          <h1 className={style.titleBook}>Phonebook</h1>
          <Form />
          <h2 className={style.titleContact}>Contacts</h2>
          {isLoadingContacts && <h2>Загружаю....</h2>}
          <Filter>
            <CancelBtn />
          </Filter>
          <ContactList contacts={contacts} />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
