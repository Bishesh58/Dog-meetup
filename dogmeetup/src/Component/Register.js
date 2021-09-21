import React, { useState, useRef, useCallback } from 'react';
import './Register.css';
import imgRegister from '../img/imgRegister.jpeg';
import MapboxAutocomplete from 'react-mapbox-autocomplete';
import { register } from '../redux/apiCalls';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { configureStore } from '@reduxjs/toolkit';
import TextField from '@material-ui/core/TextField';

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const newUser = useSelector(state => state.register);
  const getAddress = (result, lat, lng, text) => {
    setAddress(result);
  };
  //local state
  const [username, setUsername] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');

  const [dogname, setDogname] = useState('');
  const [dogbreed, setDogbreed] = useState('');
  const [dogcolor, setDogcolor] = useState('');
  const [dogweight, setDogweight] = useState('');

  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState('');

  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');

  const [dogNameError, setDogNameError] = useState(false);
  const [dogNameErrorMessage, setDogNameErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setUsernameError(false);
    setUsernameErrorMessage('');

    setFirstNameError(false);
    setFirstNameErrorMessage('');

    setLastNameError(false);
    setLastNameErrorMessage('');

    setEmailError(false);
    setEmailErrorMessage('');

    setPasswordError(false);
    setPasswordErrorMessage('');

    setConfirmPasswordError(false);
    setConfirmPasswordErrorMessage('');

    setDogNameError(false);
    setDogNameErrorMessage('');

    if (username == '') {
      setUsernameError(true);
      setUsernameErrorMessage('Please fill in this field.');
    }

    if (fname == '') {
      setFirstNameError(true);
      setFirstNameErrorMessage('Please fill in this field.');
    }

    if (lname == '') {
      setLastNameError(true);
      setLastNameErrorMessage('Please fill in this field.');
    }

    if (email == '') {
      setEmailError(true);
      setEmailErrorMessage('Please fill in this field.');
    }

    if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Please fill in this field.');
    }

    if (confirmPassword == '') {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage('Please fill in this field.');
    }

    if (dogname == '') {
      setDogNameError(true);
      setDogNameErrorMessage('Please fill in this field.');
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      register(
        {
          username,
          fname,
          lname,
          email,
          password,
          address,
          dogname,
          dogbreed,
          dogcolor,
          dogweight,
        },
        dispatch,
        history
      );
    }
  };

  return (
    <div className='register'>
      <div className='register__container'>
        <div className='register__container--left'>
          <img src={imgRegister} alt='' />
        </div>
        <div className='register__container--right'>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <h3>Create Account</h3>
            <div className='ownerDetails'>
              <h4>Owner Details</h4>
              <TextField
                className='TextField'
                error={usernameError}
                fullWidth
                helperText={usernameErrorMessage}
                label='Username'
                onChange={e => setUsername(e.target.value)}
                required
                type='fname'
                variant='outlined'
              />
              <TextField
                className='TextField'
                error={firstNameError}
                fullWidth
                helperText={firstNameErrorMessage}
                label='First Name'
                onChange={e => setFname(e.target.value)}
                required
                type='fname'
                variant='outlined'
              />
              <TextField
                className='TextField'
                error={lastNameError}
                fullWidth
                helperText={lastNameErrorMessage}
                label='Last Name'
                onChange={e => setLname(e.target.value)}
                required
                type='lname'
                variant='outlined'
              />
              <TextField
                className='TextField'
                error={emailError}
                fullWidth
                helperText={emailErrorMessage}
                label='Email'
                onChange={e => setEmail(e.target.value)}
                required
                type='email'
                variant='outlined'
              />
              <TextField
                className='TextField'
                error={passwordError}
                fullWidth
                helperText={passwordErrorMessage}
                label='Password'
                minLength='5'
                name='password'
                onChange={e => setPassword(e.target.value)}
                required
                type='password'
                variant='outlined'
              />
              <TextField
                className='TextField'
                error={confirmPasswordError}
                fullWidth
                helperText={confirmPasswordErrorMessage}
                label='Confirm Password'
                name='confirmPassword'
                onChange={e => setConfirmPassword(e.target.value)}
                required
                type='password'
                variant='outlined'
              />
              <label className='lblAddress'>Address</label>

              <MapboxAutocomplete
                publicKey={process.env.REACT_APP_MAPBOX}
                inputClass='form-control search'
                onSuggestionSelect={getAddress}
                country='nz'
                resetSearch={false}
              />
            </div>

            <div className='dogDetails'>
              <h4>Dog Details </h4>
              <TextField
                className='TextField'
                error={dogNameError}
                fullWidth
                helperText={dogNameErrorMessage}
                label='Dog Name'
                onChange={e => setDogname(e.target.value)}
                required
                type='dogname'
                variant='outlined'
              />
              <TextField
                className='TextField'
                fullWidth
                label='Dog Breed'
                onChange={e => setDogbreed(e.target.value)}
                type='dogbreed'
                variant='outlined'
              />
              <TextField
                className='TextField'
                fullWidth
                label='Dog Weight'
                onChange={e => setDogweight(e.target.value)}
                type='dogweight'
                variant='outlined'
              />
              <TextField
                className='TextField'
                fullWidth
                label='Dog Colour'
                onChange={e => setDogcolor(e.target.value)}
                type='dogcolor'
                variant='outlined'
              />

              <button type='submit'>
                {newUser.isLoading ? (
                  <CircularProgress size='30px' />
                ) : (
                  'Sign up'
                )}
              </button>
            </div>
          </form>
          {newUser.error && (
            <span
              style={{
                color: 'orange',
                display: 'block',
                fontSize: '1.25rem',
                marginBottom: '0.75rem',
                textAlign: 'center',
              }}
            >
              Something went wrong, Try again!
            </span>
          )}
          {newUser._id && (
            <span
              style={{
                color: 'green',
                display: 'block',
                fontSize: '1rem',
                marginBottom: '0.75rem',
                textAlign: 'center',
              }}
            >
              You have successfully registered! You can login now..
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
