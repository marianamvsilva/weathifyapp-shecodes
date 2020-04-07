import React, { useState } from "react";
import "./Styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let [city, setCity] = useState("Lisbon");
  return (
    <div className="App">
      <Header />
      <br />
      <Search setCity={setCity} />
      <br />
      <Weather city={city} />
      <br />
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/marianasilva92/" target="_blank">
          Mariana Silva
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/marianamvsilva/weathifyapp-shecodes"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://optimistic-poitras-de83cf.netlify.com/"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
