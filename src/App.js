/*import React from "react";
import "./Styles.css";
import Header from "./Header";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";*/

import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import Header from "./Header";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let [city, setCity] = useState("Lisbon");
  let [weatherInfo, setWeatherInfo] = useState({});

  /*export default function App() {*/
  return (
    <div className="App">
      <Header />
      <br />
      <Weather defaultCity="Amman" />
      <WeatherForecast />
      <br />
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/marianasilva92/">Mariana Silva</a>{" "}
        and is{" "}
        <a href="https://github.com/marianamvsilva/weathifyapp-shecodes">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://optimistic-poitras-de83cf.netlify.com/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
