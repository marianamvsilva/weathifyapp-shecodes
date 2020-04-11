import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview props={forecast.list[0]} />
      </div>
    );
  } else {
    let apiKey = "020587e6f2a6601e01854941fcf9435b";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
