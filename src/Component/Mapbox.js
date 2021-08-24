import React, { useEffect } from "react";
import "./Mapbox.css";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { Avatar } from "@material-ui/core";
import axios from "axios";

function Mapbox() {
  const [events, setEvents] = useState([]);
  const [address, setAddress] = useState([]);
  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "50vh",
    latitude: -36.848461,
    longitude: 174.763336,
    zoom: 13,
  });

  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await axios.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);


  return (
    <div className="mapbox">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/bisheshsunam/cksfztp1p0xsk17luuy3w7udz"
      >
        {events.map((ev, i) => (
          <>
            <Marker
              latitude={ev.lat}
              longitude={ev.long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div>
                <RoomIcon
                  style={{ fontSize: viewport.zoom * 3, color: "#c56cf0" }}
                ></RoomIcon>
              </div>
            </Marker>
            <Popup
              latitude={ev.lat}
              longitude={ev.long}
              closeButton={true}
              closeOnClick={false}
              //   onClose={() => togglePopup(false)}
              anchor="left"
            >
              <div key={i} className="eventCard">
                <div className="dogName">
                  <Avatar />
                  <p>{ev.username}</p>
                </div>
                <p>{ev.title}</p>
                {ev.activities.map((el, index) => {
                  return <li key={index}>{el}</li>;
                })}
                <button>Going</button> 3
              </div>
            </Popup>
          </>
        ))}
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