import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
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

  if (submitted) {
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
        <h1>{city}</h1>
        <ul className="weather-details">
          <li>
            <strong>Temperature:</strong> {Math.round(temperature)}°C
          </li>
          <li>
            <strong>Description:</strong> {description}
          </li>
          <li>
            <strong>Humidity:</strong> {Math.round(humidity)}%
          </li>
          <li>
            <strong>Wind:</strong> {wind}km/h
          </li>
          <li>
            <img src={icon} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
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
    );
  }
}
