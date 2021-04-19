import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.list} key={id}>
        <p>{name}</p>
        <p>{number}</p>

        <Button
          className={style.button}
          onClick={onDeleteContact(id)}
          variant="contained"
          color="primary"
          size="small"
          type="submit"
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
