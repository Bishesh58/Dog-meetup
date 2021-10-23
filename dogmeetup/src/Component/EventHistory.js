import React, { useEffect, useState } from "react";
import "./EventHistory.css";
import { useDispatch, useSelector } from "react-redux";
import EventHistoryCard from "./EventHistoryCard";

function EventHistory() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);
  const { eventsDetails } = useSelector((state) => state.events);

  return (
    <div className="eventHistory">
      {eventsDetails?.map((ev, i) =>
        ev.username === userDetails.username ? (
          <EventHistoryCard ev={ev} i={i} />
        ) : null
      )}
    </div>
  );
}

export default EventHistory;
