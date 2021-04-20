import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { fetchError } from '../../../redux/Auth/auth-action';

const Error = ({ error, setError }) => (
  <div>
    <Alert
      severity="error"
      onClose={() => {
        setError(null);
      }}
    >
      <p>Не правильный логин или пароль</p>
    </Alert>
  </div>
);
const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  setError: fetchError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Error);
