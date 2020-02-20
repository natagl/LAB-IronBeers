import React, { Component } from "react";

const Beers = props => {
  // console.log(props)
  return <div>{props.showMeBeers()}</div>;
};

export default Beers;
