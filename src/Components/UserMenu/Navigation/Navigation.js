import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../../redux/Auth/auth-selectors';

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

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Контакты
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
