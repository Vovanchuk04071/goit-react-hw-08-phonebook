import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/Auth/auth-operation';
import styles from './Register.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h1>Страница регистрации</h1>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className={styles.form}
        >
          <label className={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              autoFocus
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Зарегистрироватся</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
