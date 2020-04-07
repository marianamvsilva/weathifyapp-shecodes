import React, { useState } from "react";
import axios from "axios";
import Slogan from "./Slogan";
import "./Search.css";

export default function Weather(props) {
  const [city, setCity] = useState("Lisbon");
  const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();
  const [submitted, setSubmitted] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function loadWeather(response) {
    setSubmitted(true); /*Loaded when I get the response from the API*/
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "020587e6f2a6601e01854941fcf9435b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(loadWeather);
  }

  return (
    <div className="Search">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="I feel like going to..."
          autofocus="on"
          size="30"
          onChange={updateCity}
        />
        <div className="btn">
          <button>Take me there!</button>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>{city}</h1>
          <p>Saturday, 13:05</p>
          <h2>{Math.round(temperature)}°C</h2>
          <p>Humidity:{Math.round(humidity)}%</p>
          <p>Wind: {wind}km/h</p>
        </div>
        <div className="col-6">
          <Slogan />
          <img src={icon} alt={description} /> {description}
        </div>
      </div>
    </div>
  );
}
