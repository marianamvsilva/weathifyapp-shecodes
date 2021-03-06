import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="WeatherForecastPreview col">
      <p>{hours()}</p>
      <WeatherIcon code={props.data.weather[0].icon} />
      <p>
        {Math.round(props.data.main.temp)}
        ºC
      </p>{" "}
    </div>
  );
}
