import React from "react";
import "./Header.css";
import swLogo1 from "../../assets/star-wars1.svg";
export function Header() {
  return (
    <header className="App-header">
      <img src={swLogo1} alt="star wars logo 1" className="logo" />
      <h1>Star Wars Enciclopedia</h1>
    </header>
  );
}
