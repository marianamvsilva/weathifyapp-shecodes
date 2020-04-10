import React from "react";

export default function WeatherNow(props) {
  return (
    <div className="WeatherNow">
      <h1>{props.data.city}</h1>
      <p>Humidity: {props.data.humidity}%</p>
      <p>Wind: {props.data.wind} km/h</p>
    </div>
  );
}
