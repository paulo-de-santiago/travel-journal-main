import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card--container">
        <div className="img--card-container">
          <img
            className="img--card"
            src={`${props.imageUrl}`}
            alt={props.title}
          />
        </div>

        <div className="card--body">
          <div className="card--body-header">
            <img
              className="img--location-icon"
              src="../images/icon_3788514.png"
              alt="location icon"
            />
            <p className="card--p">{props.location}</p>
            <a className="a--card" href={props.googleMapsUrl} target="_blank">
              View on Google maps
            </a>
          </div>

          <h1 className="card-h1">{props.title}</h1>
          <h2 className="card-h2">
            {props.startDate} - {props.endDate}
          </h2>
          <p className="card--p-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
