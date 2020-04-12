import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span clasName="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">ºC</span>
    </div>
  );
}
