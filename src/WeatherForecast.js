import React from "react";
import "./WeatherForecast.css";

export default function Forecast() {
  return (
    <div className="forecast border bg-light">
      <div className="row">
        <div className="col-sm" id="day__block">
          <p>Tomorrow</p>
          <p>0ºC</p>
          <img id="day__block-icon" alt="mariana" />
        </div>
        <div className="col-sm" id="day__block">
          <p>Tomorrow</p>
          <p>0ºC</p>
          <img id="day__block-icon" alt="mariana" />
        </div>
        <div className="col-sm" id="day__block">
          <p>Tomorrow</p>
          <p>0ºC</p>
          <img id="day__block-icon" alt="mariana" />
        </div>
        <div className="col-sm" id="day__block">
          <p>Tomorrow</p>
          <p>0ºC</p>
          <img id="day__block-icon" alt="mariana" />
        </div>
        <div className="col-sm" id="day__block">
          <p>Tomorrow</p>
          <p>0ºC</p>
          <img id="day__block-icon" alt="mariana" />
        </div>
      </div>
    </div>
  );
}
