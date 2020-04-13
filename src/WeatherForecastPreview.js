import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  return (
    <div className="WeatherForecastPreview col">
      <WeatherIcon code={props.data.weather[0].icon} />
      <p>{hours()}</p>
      <p>
        {Math.round(props.data.main.temp)}
        ºC
      </p>{" "}
    </div>
  );
}
