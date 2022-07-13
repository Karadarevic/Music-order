import React from "react";
import "./App.css";
import iconMusic from "./images/icon-music.svg";
import hero from "./images/illustration-hero.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="fullbox">
      <img className="hero" alt="nft" src={hero} />
      <div className="center">
        <h1>Order Summary</h1>
        <p className="description">
          You can now listen to millions of songs, <br />
          audiobooks, and podcasts on any device <br />
          anywhere you like!
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
        <button>Proceed to Payment</button>
        <a href={""} className="cancel">
          Cancel Order
        </a>
      </div>
    </div>
  );
};
