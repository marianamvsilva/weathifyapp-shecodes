import React, { useState } from "react";
import "./Search.css";

/*export default class Search extends Component {*/
export default function Search(props) {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(city);
    /*{
          /*alert(city);
              setMessage("It's currently 20ºC in " + city);
    
        }*/
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  /*render() {*/
  return (
    <div className="destination content-section">
      <div className="container text-center">
        <h3>What's that city that doesn't let you sleep?</h3>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="city"
              placeholder="I feel like going to..."
              autofocus="on"
              size="30"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
      </div>
      <h2>{message}</h2>
    </div>
  );
}
