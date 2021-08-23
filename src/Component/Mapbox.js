import React from "react";
import "./Mapbox.css";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { Avatar } from "@material-ui/core";

function Mapbox() {
  const [viewport, setViewport] = useState({
    width: "80vw",
    height: "50vh",
    latitude: -36.848461,
    longitude: 174.763336,
    zoom: 13,
  });

  return (
    <div className="mapbox">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/bisheshsunam/cksfztp1p0xsk17luuy3w7udz"
      >
        <Marker
          latitude={-36.878118}
          longitude={174.764243}
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
          latitude={-36.878118}
          longitude={174.764243}
          closeButton={true}
          closeOnClick={false}
          //   onClose={() => togglePopup(false)}
          anchor="left"
        >
          <div className="eventCard">
            <div className="dogName">
              <Avatar />
              <p>Charlie</p>
            </div>
            <p>Gernam Shepherd</p>
            <p>Activities</p>
            <li>running</li>
            <li>jumping</li>
            <li>playing with other</li>
            <p>Mt Eden Submit,</p>
            <p> Mt eden Auckland</p>
            <button>Going</button> 3
          </div>
        </Popup>

        <Marker
          latitude={-36.883512}
          longitude={174.736739}
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
          latitude={-36.883512}
          longitude={174.736739}
          closeButton={true}
          closeOnClick={false}
          //   onClose={() => togglePopup(false)}
          anchor="right"
        >
          <div className="eventCard">
            <div className="dogName">
              <Avatar />
              <p>Max</p>
            </div>
            <p>Irish Setter</p>
            <p>Agility</p>
            <li>Free style musical dance</li>
            <li>Frisbee</li>
            <li>playing with other</li>
            <p>60 Balmoral Rd,</p>
            <p> Mt eden,Auckland</p>
            <button>Going</button> 3
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default Mapbox;
