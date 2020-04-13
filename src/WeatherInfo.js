import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-name data-items">{props.data.city}</div>
      <WeatherTemperature celsius={props.data.temperature} />
      <FriendlyDate date={props.data.date} />
      <p className="data-items">Humidity: {props.data.humidity}%</p>
      <p className="data-items">Wind: {props.data.wind} km/h</p>
    </div>
  );
}
