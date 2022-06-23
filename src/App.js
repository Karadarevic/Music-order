import React from "react";
import "./App.css";
import iconMusic from "./images/icon-music.svg";
import hero from "./images/illustration-hero.svg";
import background from "./images/pattern-background-desktop.svg";

export default () => {
  return (
    <div className="fullbox">
      <div className="card">
        <img className="hero" alt="nft" src={hero} />
        <div className="center">
          <h1 className="title">Order Summary</h1>
          <p className="description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="info">
            <img className="icon" src={iconMusic} alt="icon" />{" "}
            <div className="details">
              <p className="plan"> Annual Plan </p>
              <p className="price">$59.99/year</p>
            </div>
            <a href={""} className="change">
              Change
            </a>
          </div>
          <div className="footer">
            <button className="payment">Proceed to Payment</button>
            <a href={""} className="cancel">
              Cancel Order
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};
