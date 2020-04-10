import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p>{props.data.city}</p>
      <h2>{Math.round(props.data.temperature)}°C</h2>
      <p>Humidity: {props.data.humidity}%</p>
      <p>Wind: {props.data.wind} km/h</p>
    </div>
  );
}
