import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css';
import imgLogin from '../img/imgLogin.jpeg';
import { login } from '../redux/apiCalls';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  //ref for input
  const eml = useRef();
  const pw = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    setEmailError(false);
    setEmailErrorMessage('');

    setPasswordError(false);
    setPasswordErrorMessage('');

    if (email == '') {
      setEmailError(true);
      setEmailErrorMessage('Please fill in this field.');
    }

    if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Please fill in this field.');
    }

    login({ email, password }, dispatch, history);
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__container--left'>
          <img src={imgLogin} alt='' />
        </div>
        <div className='login__container--right'>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <h3>Sign in to your account</h3>
            <TextField
              className='TextField'
              error={emailError}
              helperText={emailErrorMessage}
              label='Email'
              onChange={e => setEmail(e.target.value)}
              ref={eml}
              required
              type='email'
              variant='outlined'
            />
            <TextField
              className='TextField'
              error={passwordError}
              helperText={passwordErrorMessage}
              label='Password'
              minLength='5'
              onChange={e => setPassword(e.target.value)}
              ref={pw}
              required
              type='password'
              variant='outlined'
            />
            <button>
              {auth.isLoading ? <CircularProgress size='30px' /> : 'Sign In'}
            </button>
            <p>
              Forget password? <span className='forgetpw'>Reset Now</span>
            </p>
          </form>
          {auth.error && (
            <span style={{ paddingLeft: '15px', color: 'orange' }}>
              Wrong username or password!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
