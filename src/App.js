import React from "react";
import "./Styles.css";
import Search from "./Search";
import Weather from "./Weather";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Search />
      <br />
      <Weather />
    </div>
  );
}
