import React from 'react';
import { connect } from 'react-redux';
import defaultImg from './default-avatar.png';
import styles from './UserMenu.module.css';
import { getUserEmail } from '../../redux/Auth/auth-selectors';
import { logout } from '../../redux/Auth/auth-operation';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <img src={defaultImg} alt="images" className={styles.img}></img>
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.btn}>
      Выйти
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
