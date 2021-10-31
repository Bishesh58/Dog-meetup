import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Button, CircularProgress } from "@material-ui/core";
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
import { fetchUser, addNewReview } from "../redux/apiCalls";

function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const auth = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.user);
  const review = useSelector((state) => state.reviews)

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [password, setPassword] = useState("");

  //review
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null)

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


  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const payload = {
      profilepic: userDetails?.profilepic,
      email: userDetails.email,
      fname:firstname,
      lname:lastname,
      title,
      description,
    }
    addNewReview(payload, dispatch)
    setResult("OK")
    resetField();
  };
  const resetField = () => {
    setFirstname("");
    setLastname("");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="profile">
      {isEditing ? (
        <EditProfile setIsEditing={setIsEditing} />
      ) : (
        <>
          <div className="profile_top">
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
                    Deleting account cannot be undone.Are you sure you want to delete?
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Enter your password</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Sorry to see you go, You can still give us feedback
                          for improvement.Thanks for using our service!
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
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleDeleteSubmit}>Delete</Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                ) : null}
                <br />
              </form>
            </div>
          </div>
          <div className="profile_bottom">
            <h4>Write Review</h4>
          <form onSubmit={handleSubmitReview}>
            
            {result === "OK" ?(<span
              id="successMessage"
              style={{ color: "purple", fontSize: "18px", padding: "15px" }}
            >
              Your review has been send..
            </span>): null
            }
            
            <input
              placeholder="First Name"
              type="fname"
              value={firstname}
              name="first_name"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />

            <input
              placeholder="Last Name"
              type="lname"
              name="last_name"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              placeholder="Title"
              type="text"
              name="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea
              placeholder="Description"
              type="messageBox"
              required
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit">{review.isLoading ? <CircularProgress size="30px" /> : "Submit"}</button>
          </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
