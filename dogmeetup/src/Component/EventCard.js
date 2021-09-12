import React from 'react';
import './EventCard.css';

function EventCard({title, activities, address}) {
    return (
        <div className="eventCard">
            <p style={{color: "black", fontSize:"18px"}}>{title}</p>
            <p>Activities:</p>
            <p>{activities}</p>
            <p>Address:</p>
            <p>{address}</p>
        </div>
    )
}

export default EventCard
