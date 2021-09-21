import React, { useState } from "react";
import "./EditProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Avatar, CircularProgress } from "@material-ui/core";
import MapboxAutocomplete from "react-mapbox-autocomplete";
import IconButton from "@material-ui/core/IconButton";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { updateUser } from "../redux/apiCalls";

function EditProfile({ setIsEditing }) {
  //get id from auth state
  const auth = useSelector((state) => state.auth);

  //get userDetails from user state
  const { isLoading, userDetails, success, successMessage } = useSelector(
    (state) => state.user
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState(userDetails?.username);
  const [firstname, setfirstname] = useState(userDetails?.firstname);
  const [lastname, setlastname] = useState(userDetails?.lastname);
  const [gender, setGender] = useState(userDetails?.gender);
  const [phone, setPhone] = useState(userDetails?.phone);
  const [address, setAddress] = useState(userDetails?.address);
  const [email, setEmail] = useState(userDetails?.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [profilepic, setProfilepic] = useState(userDetails?.profilepic);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("Confirm Passwords don't match");
    } else {
      updateUser(
        {
          username,
          firstname,
          lastname,
          gender,
          phone,
          address,
          email,
          oldPassword,
          newPassword,
          profilepic,
        },
        dispatch,
        history,
        auth.userInfo
      );

      if ({ success } && { successMessage }) {
        setIsEditing(false);
      }
    }
  };

  const getAddress = (result, lat, lng, text) => {
    setAddress(result);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };
  return (
    <div className="profile">
      <div className="profile__left">
        <Avatar
          src={userDetails?.profilepic}
          style={{ height: "150px", width: "150px" }}
        ></Avatar>
        <div className="profile__title">
          <IconButton>
            <AddAPhotoIcon />
          </IconButton>
          <h3>Bishesh Sunam</h3>
          <p>bishesh.sunam@gmail.com</p>
        </div>
        <button type="submit" onClick={handleCancel}>
          Cancel
        </button>
      </div>
      <div className="profile__right">
        <form onSubmit={handleUpdateSubmit}>
          <h3>Account Details</h3>
          <br></br>
          <label>User name:</label>
          <input
            placeholder={userDetails?.username}
            type="firstname"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>First name:</label>
          <input
            placeholder={userDetails?.firstname}
            type="firstname"
            onChange={(e) => setfirstname(e.target.value)}
          />
          <label> Last name:</label>
          <input
            placeholder={userDetails?.lastname}
            type="lastname"
            onChange={(e) => setlastname(e.target.value)}
          />
          <label> Gender:</label>
          <input
            placeholder={userDetails?.gender}
            type="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <label> Phone:</label>
          <input
            placeholder={userDetails?.phone}
            type="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label> Email:</label>
          <input
            placeholder={userDetails?.email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label> Password:</label>
          <input
            placeholder="password is requred to update profile"
            type="password"
            required
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <label>New Password:</label>
          <input
            placeholder="Enter new Password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password:</label>
          <input
            placeholder="Confirm new Password"
            type="password"
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <label> Address:</label>
          <MapboxAutocomplete
            publicKey={process.env.REACT_APP_MAPBOX}
            inputClass="form-control search"
            onSuggestionSelect={getAddress}
            country="nz"
            resetSearch={false}
            placeholder={userDetails?.address}
          />
          <button type="submit">
            {isLoading ? <CircularProgress size="30px" /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;