import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./DogProfile.css";
import DogCard from "./DogCard";
import { Button, TextField } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { fetchUser } from "../redux/apiCalls";

function DogProfile() {
  const auth = useSelector((state) => state.auth);
  const id = auth.userInfo;
  const { userDetails } = useSelector((state) => state.user);
  const { dogs } = userDetails;

  const dispatch = useDispatch();

  const [dogname, setDogname] = useState("");
  const [dogcolor, setDogcolor] = useState("");
  const [dogbreed, setDogbreed] = useState("");
  const [dogweight, setDogweight] = useState();

  const [dogWeightError, setDogWeightError] = useState(false);
  const [dogWeightErrorMessage, setDogWeightErrorMessage] = useState("");
  const [dogNameError, setDogNameError] = useState(false);
  const [dogNameErrorMessage, setDogNameErrorMessage] = useState("");

  //pop up
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dogname === "") {
      setDogNameError(true);
      setDogNameErrorMessage("Please fill in this field.");
    } else if (dogweight > 120 || dogweight < 5) {
      setDogWeightError(true);
      setDogWeightErrorMessage("Dog weight must be betweent 5 to 130 kg");
    } else {
      const payload = {
        id,
        dogname,
        dogbreed,
        dogweight,
        dogcolor,
      };
      await axios.post(`/api/users/${id}/dogs`, payload);
      fetchUser(dispatch, auth.userInfo);
      setOpen(false);
    }
  };

  return (
    <div className="dogProfile">
      <div className="dogProfile__top">
        <Button onClick={handleClickOpen}>Add new dog</Button>
        <form>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Dog</DialogTitle>
            <DialogContent>
              <TextField
                className="TextField"
                error={dogNameError}
                helperText={dogNameErrorMessage}
                fullWidth
                label="Dog name"
                onChange={(e) => setDogname(e.target.value)}
                required
                type="text"
                variant="outlined"
                onFocus={() => (
                  setDogNameError(false), setDogNameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                //error={dogcolorError}
                fullWidth
                //helperText={dogcolorErrorMessage}
                label="Dog color"
                onChange={(e) => setDogcolor(e.target.value)}
                type="text"
                variant="outlined"
                //   onFocus={() => (
                //     setUsernameError(false), setUsernameErrorMessage("")
                //   )}
              />
              <TextField
                className="TextField"
                //error={dogbreedError}
                fullWidth
                //helperText={dogbreedErrorMessage}
                label="Dog breed"
                onChange={(e) => setDogbreed(e.target.value)}
                type="text"
                variant="outlined"
                //   onFocus={() => (
                //     setUsernameError(false), setUsernameErrorMessage("")
                //   )}
              />
              <TextField
                className="TextField"
                error={dogWeightError}
                helperText={dogWeightErrorMessage}
                fullWidth
                label="Dog Weight (kg)"
                onChange={(e) => setDogweight(e.target.value)}
                type="text"
                variant="outlined"
                onFocus={() => (
                  setDogWeightError(false), setDogWeightErrorMessage("")
                )}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
      <div className="dogProfile__bottom">
        {dogs.map((dog) => (
          <DogCard dog={dog} />
        ))}
      </div>
    </div>
  );
}

export default DogProfile;
