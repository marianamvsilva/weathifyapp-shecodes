import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <FriendlyDate date={props.data.date} />
      <div className="city-name">{props.data.city}</div>
      <WeatherTemperature celsius={props.data.temperature} />
      <p className="data-items">Humidity: {props.data.humidity}%</p>
      <p className="data-items">Wind: {props.data.wind} km/h</p>
    </div>
  );
}
