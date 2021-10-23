import React from "react";
import "./EventCard.css";
import moment from "moment";
import { format } from "timeago.js";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

function EventCard({ Ev }) {
  return (
    <div className="eventCard">
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Title: {Ev?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Dog Breed: {Ev?.dogtype}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Dog Weight: {Ev.dogweight} kg
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Activities:{" "}
          {Ev.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Start Date: {moment(Ev.startDate).format("MMMM Do YYYY, h:mm a")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          End Date: {moment(Ev.endDate).format("MMMM Do YYYY, h:mm a")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Address: {Ev?.address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created by: {Ev?.username} {format(Ev.createdAt)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total people join: {Ev?.going}
        </Typography>
      </CardContent>
    </div>
  );
}

export default EventCard;
