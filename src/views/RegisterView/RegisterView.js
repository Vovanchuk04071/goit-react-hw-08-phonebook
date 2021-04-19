import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/Auth/auth-operation';
import styles from './Register.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
          <TextField
            className={styles.label}
            type="text"
            name="name"
            autoFocus
            value={name}
            onChange={this.handleChange}
            label="name"
            variant="outlined"
            size="small"
          ></TextField>

          <TextField
            margin="normal"
            type="email"
            name="email"
            value={email}
            size="small"
            onChange={this.handleChange}
            label="email"
            variant="outlined"
          >
            {'Почта '}
          </TextField>
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
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Зарегистрироватся
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
