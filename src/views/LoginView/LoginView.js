import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginView.module.css';
import { login } from '../../redux/Auth/auth-operation';

class LoginView extends Component {
  state = {
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

    this.props.onLogin(this.state);

    this.setState({
      email: '',
      password: '',
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Страница логина</h1>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              autoFocus
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
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);
