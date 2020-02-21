import React, { Component } from "react";
import Axios from "axios";

class NewBeer extends Component {
  state = {};
  addNewBeer = event => {
    event.preventDefault();
    console.log(this.state);
    Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // let newBeer = {
    //   name: "",
    //   tagline: "",
    //   description: "",
    //   first_brewed: "",
    //   brewers_tips: "",
    //   attenuation_level: 5,
    //   contributed_by: ""
    // };
  };
  handleOnTyping = e => {
    console.log("value is", e.target.value);
    this.setState({
      [e.target.name]: e.target.value //to make it dynamic
    });
  };
  render() {
    return (
      <div className="inputBox">
        <form onSubmit={this.addNewBeer}>
          Name
          <br />
          <input type="text" name="name" onChange={this.handleOnTyping} />
          Tagline
          <br />
          <input type="text" name="tagline" onChange={this.handleOnTyping} />
          Description
          <br />
          <input
            type="text"
            name="description"
            onChange={this.handleOnTyping}
          />
          First_brewed
          <br />
          <input
            type="text"
            name="first_brewed"
            onChange={this.handleOnTyping}
          />
          Brewers_tips
          <br />
          <input
            type="text"
            name="brewers_tips"
            onChange={this.handleOnTyping}
          />
          Attenuation_level
          <br />
          <input
            type="number"
            name="attenuation_level"
            onChange={this.handleOnTyping}
          />
          Contributed_by
          <br />
          <input
            type="text"
            name="contributed_by"
            onChange={this.handleOnTyping}
          />
          <br />
          <input type="submit" className="inputButton" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
