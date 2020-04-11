import React from "react";
import "./WeatherSlogan.css";

export default function WeatherSlogan(props) {
  if (props.data.description === "clear sky") {
    return <div className="Slogan">You're set for some beach vacay.</div>;
  }
  if (
    props.data.description === "few clouds" ||
    "scattered clouds" ||
    "broken clouds"
  ) {
    return <div className="Slogan">Meh, you can do some sightseeing...</div>;
  }
  if (props.data.description === "shower rain" || "rain" || "snow") {
    return <div className="Slogan">Do you fancy Starbucks coffee?</div>;
  } else {
    return <div className="Slogan">Book yourflight right away!</div>;
  }
}
