import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './LoginView.module.css';
import { login } from '../../redux/Auth/auth-operation';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
          <TextField
            margin="normal"
            type="email"
            name="email"
            value={email}
            autoFocus
            size="small"
            onChange={this.handleChange}
            label="email"
            variant="outlined"
          >
            {'Почта '}
          </TextField>
          {/* <label className={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              autoFocus
              onChange={this.handleChange}
            />
          </label> */}
          <TextField
            margin="normal"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="password"
            variant="outlined"
            size="small"
          ></TextField>
          {/* <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Войти
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);
