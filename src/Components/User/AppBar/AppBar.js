import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import styles from './AppBar.module.css';
import UserMenu from '../UserMenu';
import { getIsAuthenticated } from '../../../redux/Auth/auth-selectors';
import { connect } from 'react-redux';

const AppBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
