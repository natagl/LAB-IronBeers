import React, { Component } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    //{this.showBeers()}
    <ul id="home">
      <img src="/images/beers.png"></img>
      <br />
      <Link to="/beers">Beers</Link>
      <br />
      <img src="/images/new-beer.png"></img>
      <br />
      <Link to="/new-beer">New Beer</Link>
      <br />
      <img src="/images/random-beer.png"></img>
      <br />
      <Link to="/random">Random Beer</Link>
      <br />
    </ul>
  );
};

export default HomePage;
