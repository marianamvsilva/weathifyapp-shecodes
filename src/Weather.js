import React, { useState } from "react";
import axios from "axios";
import WeatherSlogan from "./WeatherSlogan";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function loadWeather(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "020587e6f2a6601e01854941fcf9435b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(loadWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
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
        <div className="container container-weather">
          <div className="row">
            <div className="col-6">
              <WeatherInfo data={weatherData} />
            </div>
            <div className="col-6">
              <WeatherSlogan data={weatherData} />
              <img src={weatherData.icon} alt={weatherData.description} />{" "}
              <span className="text-capitalize">{weatherData.description}</span>
            </div>
          </div>
        </div>
        <WeatherForecast city={weatherData.city} data={weatherData} />
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
