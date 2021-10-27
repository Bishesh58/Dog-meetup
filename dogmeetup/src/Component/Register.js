import React, { useState } from "react";
import "./Register.css";
import imgRegister from "../img/imgRegister.jpeg";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { register } from "../redux/apiCalls";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import validator from "validator";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const newUser = useSelector((state) => state.register);
  const getAddress = (result, lat, lng, text) => {
    setAddress(result);
    setLat(lat);
    setLong(lng);
  };
  //local state
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [dogname, setDogname] = useState("");
  const [dogbreed, setDogbreed] = useState("");
  const [dogcolor, setDogcolor] = useState("");
  const [dogweight, setDogweight] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");

  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState("");

  const [dogNameError, setDogNameError] = useState(false);
  const [dogNameErrorMessage, setDogNameErrorMessage] = useState("");

  const [dogWeightError, setDogWeightError] = useState(false);
  const [dogWeightErrorMessage, setDogWeightErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setUsernameError(true);
      setUsernameErrorMessage("Please fill in this field.");
    } else if (fname === "") {
      setFirstNameError(true);
      setFirstNameErrorMessage("Please fill in this field.");
    } else if (lname === "") {
      setLastNameError(true);
      setLastNameErrorMessage("Please fill in this field.");
    } else if (email === "") {
      setEmailError(true);
      setEmailErrorMessage("Please fill in this field.");
    } else if (!validator.isEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Email is not valid");
    } else if (password === "") {
      setPasswordError(true);
      setPasswordErrorMessage("Please fill in this field.");
    } else if (confirmPassword === "") {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Please fill in this field.");
    } else if (dogname === "") {
      setDogNameError(true);
      setDogNameErrorMessage("Please fill in this field.");
    } else if (dogweight > 120 || dogweight < 5) {
      setDogWeightError(true);
      setDogWeightErrorMessage("Dog weight must be betweent 5 to 130 kg");
    } else if (password !== confirmPassword) {
      alert("Passwords don't match");
    } else {
      register(
        {
          username,
          firstname: fname,
          lastname: lname,
          gender,
          phone,
          email,
          password,
          address,
          lat,
          long,
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
    <div className="register">
      <div className="register__container">
        <div className="register__container--left">
          <img src={imgRegister} alt="" />
        </div>
        <div className="register__container--right">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h3>Create Account</h3>
            <div className="ownerDetails">
              <h4>Owner Details</h4>
              <TextField
                className="TextField"
                error={usernameError}
                fullWidth
                helperText={usernameErrorMessage}
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setUsernameError(false), setUsernameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={firstNameError}
                fullWidth
                helperText={firstNameErrorMessage}
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setFirstNameError(false), setFirstNameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={lastNameError}
                fullWidth
                helperText={lastNameErrorMessage}
                label="Last Name"
                onChange={(e) => setLname(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setLastNameError(false), setLastNameErrorMessage("")
                )}
              />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="radio-buttons-group"
                defaultValue="male"
                onChange={(e) => setGender(e.target.value)}
                className="RadioGroup"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio required={true} />}
                  label="Other"
                />
              </RadioGroup>
              <TextField
                className="TextField"
                fullWidth
                label="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                variant="outlined"
              />

              <TextField
                className="TextField"
                error={emailError}
                fullWidth
                helperText={emailErrorMessage}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                value={email}
                variant="outlined"
                onKeyPress={() =>
                  validator.isEmail(email)
                    ? setEmailErrorMessage("")
                    : setEmailErrorMessage("Not a valid email!")
                }
                onFocus={() => (setEmailError(false), setEmailErrorMessage(""))}
              />
              <TextField
                className="TextField"
                error={passwordError}
                fullWidth
                helperText={passwordErrorMessage}
                label="Password"
                minLength="5"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                variant="outlined"
                onFocus={() => (
                  setPasswordError(false), setPasswordErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                error={confirmPasswordError}
                fullWidth
                helperText={confirmPasswordErrorMessage}
                label="Confirm Password"
                name="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                type="password"
                variant="outlined"
                onFocus={() => (
                  setConfirmPasswordError(false),
                  setConfirmPasswordErrorMessage("")
                )}
              />
              <label className="lblAddress">Address</label>

              <MapboxAutocomplete
                publicKey={process.env.REACT_APP_MAPBOX}
                inputClass="form-control search"
                onSuggestionSelect={getAddress}
                country="nz"
                resetSearch={false}
              />
            </div>

            <div className="dogDetails">
              <h4>Dog Details </h4>
              <TextField
                className="TextField"
                error={dogNameError}
                fullWidth
                helperText={dogNameErrorMessage}
                label="Dog Name"
                onChange={(e) => setDogname(e.target.value)}
                required
                type="dogname"
                variant="outlined"
                onFocus={() => (
                  setDogNameError(false), setDogNameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                fullWidth
                label="Dog Breed"
                onChange={(e) => setDogbreed(e.target.value)}
                type="dogbreed"
                variant="outlined"
              />
              <TextField
                className="TextField"
                fullWidth
                label="Dog Weight (kg)"
                onChange={(e) => setDogweight(e.target.value)}
                type="number"
                variant="outlined"
                error={dogWeightError}
                helperText={dogWeightErrorMessage}
                min="5"
                max="130"
                onFocus={() => (
                  setDogWeightError(false), setDogWeightErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                fullWidth
                label="Dog Colour"
                onChange={(e) => setDogcolor(e.target.value)}
                type="dogcolor"
                variant="outlined"
              />

              <button type="submit">
                {newUser.isLoading ? (
                  <CircularProgress size="30px" />
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
          </form>
          {newUser.error && (
            <span
              style={{
                color: "orange",
                display: "block",
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
                textAlign: "center",
              }}
            >
              Something went wrong, Try again!
            </span>
          )}
          {newUser._id && (
            <span
              style={{
                color: "green",
                display: "block",
                fontSize: "1rem",
                marginBottom: "0.75rem",
                textAlign: "center",
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
