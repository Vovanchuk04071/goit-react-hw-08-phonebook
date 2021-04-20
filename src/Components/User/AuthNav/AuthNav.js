import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Error from '../Error';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = ({ error }) => (
  <>
    {error ? (
      <Error />
    ) : (
      <nav>
        <NavLink
          to="/login"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Войти
        </NavLink>
        <NavLink
          to="/register"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Регистрация
        </NavLink>
      </nav>
    )}
  </>
);

const mapStateToProps = state => ({
  error: state.auth.error,
});

export default connect(mapStateToProps)(AuthNav);
