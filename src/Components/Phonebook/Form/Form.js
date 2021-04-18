import React, { Component } from 'react';

import styles from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (this.isExistName(name)) {
      return alert(`${name} is already in contacts!`);
    }

    if ((name.length > 0) & (number.length > 0)) {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  isExistName = inputName => {
    const contacts = this.props.contactName;
    const normalaizedFilter = inputName.toLowerCase();

    return contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        normalaizedFilter,
    );
  };

  handleFocus = () =>
    this.setState({
      number: '+380',
    });

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <label className={styles.label}>
          Name
          <input
            type="Text"
            placeholder="Your name"
            value={name}
            name="name"
            onChange={this.handleChange}
            className={styles.formInput}
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            type="Text"
            placeholder="Your number"
            value={number}
            name="number"
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            className={styles.formInput}
          ></input>
        </label>
        <button
          className={styles.button}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
