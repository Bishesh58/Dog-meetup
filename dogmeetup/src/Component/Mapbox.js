import React, { useEffect } from "react";
import "./Mapbox.css";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@material-ui/icons/Room";
import { Avatar, Button, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Close";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { format } from "timeago.js";
import moment from "moment";
import { addNewEvent, fetchEvents } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Mapbox() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const { eventsDetails } = useSelector((state) => state.events);

  const [events, setEvents] = useState([]);
  const [address, setAddress] = useState([]);
  const [currentPlaceID, setCurrentPlaceID] = useState(null);
  const [newEvent, setNewEvent] = useState(null);
  const [title, setTitle] = useState(" ");
  const [activities, setActivities] = useState("");
  const [dogtype, setDogType] = useState("");
  const [dogweight, setDogweight] = useState();
  const [activityList, setActivityList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [join, setJoin] = useState(false);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -36.848461,
    longitude: 174.763336,
    zoom: 13,
  });

  const [settings, setSettings] = useState({
    doubleClickZoom: false,
  });

  //get events
  useEffect(() => {
    fetchEvents(dispatch);
  }, []);

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceID(id);
    setViewport({
      ...viewport,
      latitude: lat,
      longitude: long,
    });
  };

  const handleNewEvent = (e) => {
    const [long, lat] = e.lngLat;
    setNewEvent({
      lat: lat,
      long: long,
    });
    setViewport({
      ...viewport,
      latitude: lat,
      longitude: long,
    });
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

  const handleSubmitNewEvent = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${newEvent.long},${newEvent.lat}.json?access_token=${process.env.REACT_APP_MAPBOX}`
      )
        .then((res) => {
         return res.json();
        })
        .then((data) =>{
          setAddress(data.features[0].place_name)
        } );
        
    } catch (error) {
      console.log(error);
    }
    const payload = {
      username: userDetails.username,
      profilepic: userDetails.profilepic,
      title,
      dogtype,
      dogweight,
      startDate,
      endDate,
      activities: activityList,
      lat: newEvent.lat,
      long: newEvent.long,
      address,
    };
    addNewEvent(payload, dispatch);
    setNewEvent(null);
    setActivityList([]);
  };

  const addToGoing = async (e) => {
    e.preventDefault();
    const going = 1;
    try {
      const res = await axios.patch(`/api/events/`, going);
      setEvents([...events, newEvent]);
      //setNewEvent(null)
      //setActivityList([])
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="mapbox">
      <ReactMapGL
        {...viewport}
        {...settings}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/bisheshsunam/cksfztp1p0xsk17luuy3w7udz"
        onDblClick={handleNewEvent}
      >
        {eventsDetails?.map((ev, i) => (
          <>
            <Marker
              latitude={ev.lat}
              longitude={ev.long}
              offsetLeft={-viewport.zoom * 1.5}
              offsetTop={-viewport.zoom * 3}
              key={i}
            >
              <div>
                <RoomIcon
                  style={{
                    fontSize: viewport.zoom * 3,
                    color: ev.username === "Bishesh" ? "#c56cf0" : "tomato",
                    cursor: "pointer",
                  }}
                  onClick={() => handleMarkerClick(ev._id, ev.lat, ev.long)}
                ></RoomIcon>
              </div>
            </Marker>
            {ev._id === currentPlaceID && (
              <Popup
                latitude={ev.lat}
                longitude={ev.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceID(null)}
                anchor="left"
                className="popup"
              >
                <div key={i} className="mapbox__eventCard">
                  <div className="dogName">
                    <Avatar src={ev?.profilepic} />
                    <p style={{ marginLeft: "-40px" }}>{ev?.username}</p>
                  </div>
                  <p>{ev?.title}</p>
                  {ev?.activities.map((el, index) => {
                    return (
                      <li
                        style={{ fontSize: "small", padding: "5px 0px" }}
                        key={index}
                      >
                        {el}
                      </li>
                    );
                  })}
                  <p>
                    Start: {moment(ev.startDate).format("MMMM Do YYYY, h:mm a")}
                  </p>
                  <p>
                    End: {moment(ev.endDate).format("MMMM Do YYYY, h:mm a")}
                  </p>
                  <p>{ev.address}</p>
                  <span>{format(ev.createdAt)}</span>
                  <Button
                    style={{
                      backgroundColor: "#5577d2",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                    }}
                    onClick={addToGoing}
                  >
                    Join
                  </Button>
                  {join && ev.going + 1}
                </div>
              </Popup>
            )}
          </>
        ))}

        {newEvent && (
          <Popup
            latitude={newEvent.lat}
            longitude={newEvent.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setNewEvent(null)}
            anchor="bottom"
          >
            Add New Event
            <div className="newEvent">
              <form onSubmit={handleSubmitNewEvent}>
                <TextField
                  className="TextField"
                  fullWidth
                  label="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className="TextField"
                  fullWidth
                  label="Dog Breed"
                  onChange={(e) => setDogType(e.target.value)}
                  required
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className="TextField"
                  fullWidth
                  label="Dog Weight"
                  onChange={(e) => setDogweight(e.target.value)}
                  required
                  type="text"
                  variant="outlined"
                />
                <TextField
                  className="TextField"
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

                <Button type="submit">Submit</Button>
              </form>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

export default Mapbox;

// useEffect(() => {
//   const fetchAddress = async(lng, lat)=> {
//     try {
//       await fetch(
//           `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.REACT_APP_MAPBOX}`
//       )
//         .then(res => {res.json()})
//         .then(data => setAddress(data.features[0]))
//         // .then(data =>setAddress(data.features[0]));

//     } catch (error) {
//       console.log(error);
//     }
//   };
//   events.map((ev)=>{
//     fetchAddress(ev.long, ev.lat);
//   })

// }, []);
