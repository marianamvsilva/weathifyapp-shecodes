import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data);
  }

  if (loaded) {
    console.log(forecast);
    return "loaded";
  } else {
    let apiKey = "020587e6f2a6601e01854941fcf9435b";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
