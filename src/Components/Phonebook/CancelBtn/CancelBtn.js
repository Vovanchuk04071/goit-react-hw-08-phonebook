import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../../redux/Phonebook/phoneBook-action';
import styles from './cancel.module.css';
import cancelImg from '../../../img/icons8-отмена-20.png';

const CancelBtn = ({ clearFilter }) => {
  return (
    <button
      onClick={clearFilter}
      className={styles.btn}
      type="button"
    >
      <img
        src={cancelImg}
        className={styles.img}
        alt="cancel"
      />
    </button>
  );
};
const mapDispatchToProps = dispatch => ({
  clearFilter: () => dispatch(changeFilter('')),
});

export default connect(
  null,
  mapDispatchToProps,
)(CancelBtn);
