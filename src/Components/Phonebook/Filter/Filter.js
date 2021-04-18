import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange, children }) => (
  <>
    <h3>Find contact by name</h3>
    <label className={style.label}>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
      {children}
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
