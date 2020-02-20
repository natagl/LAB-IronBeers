import React, { Component } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    //{this.showBeers()}
    <ul>
      <img src="/images/beers.png"></img>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <img src="/images/new-beer.png"></img>
      <li>
        <Link to="/new-beer">New Beer</Link>
      </li>
      <img src="/images/random-beer.png"></img>
      <li>
        <Link to="/random-beer">Random Beer</Link>
      </li>
    </ul>
  );
};

export default HomePage;
