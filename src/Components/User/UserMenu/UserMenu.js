import React from 'react';
import { connect } from 'react-redux';
import defaultImg from './default-avatar.png';
import styles from './UserMenu.module.css';
import { getUserEmail } from '../../../redux/Auth/auth-selectors';
import { logout } from '../../../redux/Auth/auth-operation';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.container}>
    <img src={defaultImg} alt="images" className={styles.img}></img>
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      onClick={onLogout}
      className={styles.btn}
      variant="contained"
      color="primary"
      size="small"
      endIcon={<ExitToAppIcon />}
    >
      Выход
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
