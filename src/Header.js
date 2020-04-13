import React, { Component } from "react";
import "./Header.css";
import logo_weathify_1 from "./logo_weathify_1.png";
import header_img from "./header_img.png";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-md-4">
              <img src={header_img} className="img-fluid" alt="main" />
            </div>
            <div className="col col-md-8">
              <img
                src={logo_weathify_1}
                className="logo-app"
                alt="weathify logo"
              />
              <h2>
                The weather app for <strong>impulsive</strong> solo travelers
              </h2>
              <br />
              <div className="container download">
                <button className="btn btn-dark">Download for Android</button>
                <button className="btn btn-dark">Download for IOS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
