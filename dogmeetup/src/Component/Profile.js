import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import EditProfile from "./EditProfile";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router";
import { logout } from "../redux/authSlice";
import { fetchUser } from "../redux/apiCalls";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/users/${auth.userInfo._id}`, {
      data: { password },
    });
    setOpen(false);
    history.push("/login");
    dispatch(logout());
  };

  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setIsDeleting(true);
  };

  //for delete confirmation
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsDeleting(false);
  };

  return (
    <div className="profile">
      {isEditing ? (
        <EditProfile setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="profile__left">
            <Avatar
              src={userDetails?.profilepic}
              style={{ height: "150px", width: "150px" }}
            ></Avatar>
            <div className="profile__title">
              <IconButton></IconButton>
              <h3>
                {userDetails?.firstname} {userDetails?.lastname}
              </h3>
              <p>{userDetails?.email}</p>
            </div>
          </div>
          <div className="profile__right">
            <form>
              <h3>Account Details</h3>
              <br></br>
              <div>User name: {userDetails?.username} </div>
              <div>First name: {userDetails?.firstname}</div>
              <div> Last name: {userDetails?.lastname}</div>
              <div> Gender: {userDetails?.gender}</div>
              <div> Phone: {userDetails?.phone}</div>
              <div> Email: {userDetails?.email}</div>
              <div> Address: {userDetails?.address}</div>
              <Button
                className="btnEdit"
                type="submit"
                onClick={handleEditSubmit}
              >
                Edit Profile
              </Button>
              <br />
              <Button className="btnEdit" onClick={handleDeleteBtn}>
                Delete Profile
              </Button>
              {isDeleting ? (
                <div>
                  <Button variant="outlined" onClick={handleClickOpen}>
                    Are you sure you want to delete?
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Enter your password</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Sorry to see you go, You can still give us feedback for
                        improvement.Thanks for using our service!
                      </DialogContentText>
                      <TextField
                        autoFocus
                        margin="dense"
                        name="password"
                        id="password"
                        label="Password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </DialogContent>
                    <DialogActions >
                      <Button onClick={handleClose} >Cancel</Button>
                      <Button onClick={handleDeleteSubmit} >Delete</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              ) : null}
              <br />
              <div className="delete_message">
                Deleting account cannot be undone <strong> {userDetails?.username}! </strong> <br/> You
                should confirm your password to delete your account.
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
