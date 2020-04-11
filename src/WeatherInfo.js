import React from "react";
/*import FriendlyDate from "./FriendlyDate";*/

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{Math.round(props.data.temperature)}°C</h2>
      <p>Humidity: {props.data.humidity}%</p>
      <p>Wind: {props.data.wind} km/h</p>
    </div>
  );
}
