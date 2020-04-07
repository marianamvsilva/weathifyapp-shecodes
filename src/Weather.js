import React, { useState } from "react";
import axios from "axios";
import Slogan from "./Slogan";
import WeatherNow from "./WeatherNow";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  /*const [loaded, setLoaded] = useState(false);*/

  /*const [temperature, setTemperature] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [description, setDescription] = useState();
  const [icon, setIcon] = useState();*/
  /*const [submitted, setSubmitted] = useState(false);*/

  function updateCity(event) {
    setCity(event.target.value);
  }

  function loadWeather(response) {
    console.log(response.data);
    /*setLoaded(true);*/
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
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
          <h1 className="text-capitalize">{city}</h1>
          <p>Saturday, 13:05</p>
          <h2>{Math.round(weatherData.temperature)}°C</h2>
          <p>Humidity: {Math.round(weatherData.humidity)}%</p>
          <p>Wind: {weatherData.wind}km/h</p>
        </div>
        <div className="col-6">
          <Slogan />
          <img src={weatherData.icon} alt={weatherData.description} />{" "}
          <span className="text-capitalize">{weatherData.description}</span>
        </div>
      </div>
      <WeatherNow />
    </div>
  );
}
