import React, { useState, useEffect } from "react";
import "./EventHistoryCard.css";
import axios from "axios";
import { Button, IconButton } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Close";
import InputAdornment from "@mui/material/InputAdornment";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
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
import moment from "moment";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { fetchEvents, updateEvent } from "../redux/apiCalls";

function EventHistoryCard({ ev, i }) {
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [title, setTitle] = useState(" ");
  const [activities, setActivities] = useState("");
  const [dogtype, setDogType] = useState("");
  const [dogweight, setDogweight] = useState();
  const [activityList, setActivityList] = useState(ev?.activities);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [going, setCount] = useState(0);
  const [join, setJoin] = useState(false);
  const [points, setPoint] = useState([]);
  const [steps, setSteps] = useState([]);

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
    setOpen(false);
    await axios.delete(`/api/events/${ev._id}`);
    
    fetchEvents(dispatch);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    // if (dogname === "") {
    //   setDogNameError(true);
    //   setDogNameErrorMessage("Please fill in this field.");
    // } else if (dogweight > 120 || dogweight < 5) {
    //   setDogWeightError(true);
    //   setDogWeightErrorMessage("Dog weight must be betweent 5 to 130 kg");
    // } else {
    //   const payload = {
           
    

    //   };
    //   await axios.patch(`/api/events/${ev._id}`, payload);
    //   setExpanded(!expanded);
    //   fetchEvents(dispatch);
    // }
  };
  //adding activity list
  const addActivities = (e) => {
    e.preventDefault();
    setActivityList((activityList) => [...activityList, activities]);
    setActivities(" ");
  };

  //removing item from activity list
  const removeList = (e) => {
    const index = e.currentTarget.dataset.index;
    var array = [...activityList];
    if (index !== -1) {
      array.splice(index, 1);
      setActivityList(array);
    }
  };

  return (
    <div className="eventHistoryCard">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Title: {ev.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dog Breed: {ev.dogtype}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Dog Weight: {ev.dogweight} kg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Activities:{" "}
            {ev.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Start Date: {moment(ev.startDate).format("MMMM Do YYYY, h:mm a")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            End Date: {moment(ev.endDate).format("MMMM Do YYYY, h:mm a")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {ev?.address}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button onClick={handleClickOpen}>Delete</Button>
          <div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                Are you sure you want to delete this event?
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
              <TextField
                className="TextField"
                required
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                variant="outlined"
                placeholder={ev.title}
              />
              <TextField
                className="TextField"
                fullWidth
                onChange={(e) => setDogType(e.target.value)}
                required
                type="text"
                variant="outlined"
                placeholder={ev.dogtype}
              />
              <TextField
                className="TextField"
                fullWidth
                onChange={(e) => setDogweight(e.target.value)}
                required
                type="text"
                variant="outlined"
                placeholder={ev?.dogweight}
              />
              <TextField
                className="TextField"
                fullWidth
                label="Activities"
                variant="outlined"
                required
                value={activities}
                fullWidth
                onChange={(e) => setActivities(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        onClick={addActivities}
                        disabled={!activities.trim()}
                      >
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="activityList">
                {activityList.map((activity, index) => (
                  <div key={index}>
                    {activity}
                    <IconButton data-index={index} onClick={removeList}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                ))}
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="DatePicker">
                  <DateTimePicker
                    label="Start Date"
                    inputVariant="outlined"
                    // minDateTime={}
                    value={startDate}
                    onChange={setStartDate}
                    fullWidth
                    style={{ paddingRight: "10px" }}
                  />

                  <DateTimePicker
                    label="End Date"
                    inputVariant="outlined"
                    // minDateTime={}
                    value={endDate}
                    onChange={setEndDate}
                    fullWidth
                  />
                </div>
              </MuiPickersUtilsProvider>
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

export default EventHistoryCard;
