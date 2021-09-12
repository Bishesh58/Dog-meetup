import React, { useEffect } from "react";
import "./Mapbox.css";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import RoomIcon from "@material-ui/icons/Room";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox() {
  const [events, setEvents] = useState([]);
  const [address, setAddress] = useState([]);
  const [currentPlaceID, setCurrentPlaceID] = useState(null);
  const [newEvent, setNewEvent] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: -36.848461,
    longitude: 174.763336,
    zoom: 13,
  });

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get("/api/events");
        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
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

  return (
    <div className="mapbox">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/bisheshsunam/cksfztp1p0xsk17luuy3w7udz"
        onDblClick={handleNewEvent}
      >
        {events.map((ev, i) => (
          <>
            <Marker
              latitude={ev.lat}
              longitude={ev.long}
              offsetLeft={-30}
              offsetTop={-10}
            >
              <div>
                <RoomIcon
                  style={{
                    fontSize: viewport.zoom * 3,
                    color: "#c56cf0",
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
                    <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*" />
                    <p style={{marginLeft:"-40px"}}>{ev.username}</p>
                  </div>
                  <p>{ev.title}</p>
                  {ev.activities.map((el, index) => {
                    return <li style={{fontSize:"small", padding:"5px 0px"}} key={index}>{el}</li>;
                  })}
                  <Button
                    style={{
                      backgroundColor: "#5577d2",
                      color: "#FFFFFF",
                      textTransform: "capitalize",
                    }}
                  >
                    Going
                  </Button>{" "}
                  3
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
            anchor="left"
          >
            new pop up
            {/* <div className="newEvent">
              <form action="">
                <label>Title</label>
                <input>Enter a title</input>
                <label>Title</label>
                <input>Enter a title</input>
                <label>Title</label>
                <input>Enter a title</input>
              </form>
            </div> */}
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
