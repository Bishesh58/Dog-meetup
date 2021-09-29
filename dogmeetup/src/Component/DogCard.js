import React, { useEffect, useState } from "react";
import "./DogCard.css";
import axios from "axios";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../redux/apiCalls";

function DogCard({ dog }) {
  const auth = useSelector((state) => state.auth);
  const dogId = dog._id;
  const userId = auth.userInfo;
  const dispatch = useDispatch();

  const [dogname, setDogname] = useState(dog?.dogname);
  const [dogcolor, setDogcolor] = useState(dog?.dogcolor);
  const [dogbreed, setDogbreed] = useState(dog?.dogbreed);
  const [dogweight, setDogweight] = useState(dog?.dogweight);
  const [dogpic, setDogpic] = useState(dog?.dogpic);
  const [file, setFile] = useState(null);

  const [dogWeightError, setDogWeightError] = useState(false);
  const [dogWeightErrorMessage, setDogWeightErrorMessage] = useState("");
  const [dogNameError, setDogNameError] = useState(false);
  const [dogNameErrorMessage, setDogNameErrorMessage] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 445,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //for delete confirmation
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    await axios.delete(`/api/users/dogs/${dogId}`, {
      data: { userId, dogId },
    });
    fetchUser(dispatch, auth.userInfo);
    setOpen(false);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (dogname === "") {
      setDogNameError(true);
      setDogNameErrorMessage("Please fill in this field.");
    } else if (dogweight > 120 || dogweight < 5) {
      setDogWeightError(true);
      setDogWeightErrorMessage("Dog weight must be betweent 5 to 130 kg");
    } else {
      const payload = {
        dogId,
        dogname,
        dogbreed,
        dogweight,
        dogcolor,
        dogpic,
      };
      await axios.patch(`/api/users/dogs/${dogId}`, payload);
      setExpanded(!expanded);
      fetchUser(dispatch, auth.userInfo);
    }
  };

  //uploading image to cloudinary
  const handleSelect = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "profile_image");
    formData.append("cloud_name", "dygxlj9hh");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dygxlj9hh/image/upload",
        formData
      );
      setDogpic(res.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (file) {
      document
        .getElementById("upload")
        .addEventListener("click", handleSelect());
    }
  }, [file]);

  return (
    <div className="dogCard">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={
            dog?.dogpic ||
            `https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg`
          }
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Name: {dog?.dogname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Breed: {dog?.dogbreed}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Color: {dog?.dogcolor}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Weight: {dog?.dogweight}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={handleClickOpen}>Delete</Button>
          <div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                Are you sure you want to delete this dog?
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" onClick={handleDeleteSubmit}>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Button
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Edit
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <form>
              <Grid container>
                <Button variant="contained" component="label">
                  change image{" "}
                  <input
                    type="file"
                    hidden
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Button>
                <button
                  type="submit"
                  id="upload"
                  onClick={handleSelect}
                ></button>
              </Grid>
              <TextField
                className="TextField"
                error={dogNameError}
                helperText={dogNameErrorMessage}
                required
                fullWidth
                placeholder={dog?.dogname}
                onChange={(e) => setDogname(e.target.value)}
                onFocus={() => (
                  setDogNameError(false), setDogNameErrorMessage("")
                )}
              />
              <TextField
                className="TextField"
                fullWidth
                placeholder={dog?.dogbreed}
                onChange={(e) => setDogbreed(e.target.value)}
              />
              <TextField
                className="TextField"
                fullWidth
                placeholder={dog?.dogcolor}
                onChange={(e) => setDogcolor(e.target.value)}
              />
              <TextField
                className="TextField"
                error={dogWeightError}
                helperText={dogWeightErrorMessage}
                fullWidth
                placeholder={dog?.dogweight}
                onChange={(e) => setDogweight(e.target.value)}
                onFocus={() => (
                  setDogWeightError(false), setDogWeightErrorMessage("")
                )}
              />
              <Button type="submit" fullWidth onClick={handleUpdateSubmit}>
                Update
              </Button>
            </form>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default DogCard;
