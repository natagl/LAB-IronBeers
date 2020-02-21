import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/home-page";
import Beers from "./components/beers";
import RandomBeer from "./components/random-beer";
import NewBeer from "./components/new-beer";
import Header from "./components/Header";
import BeerDetail from "./components/BeerDetail";

class App extends Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    //to get axios
    this.getAllTheBeers();
  }
  getAllTheBeers() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(allBeers => {
      //   console.log(allBeers); too see beers
      this.setState({ allBeers: allBeers.data }); //.data because we have to return data
    });
  }
  showBeers = () => {
    return this.state.allBeers.map(eachBeer => {
      return (
        <div key={eachBeer._id} className="beerCard">
          <div className="beerText">
            <ul>{eachBeer.name}</ul>
            <h4>{eachBeer.tagline}</h4>
            <p>Creator: {eachBeer.contributed_by}</p>
          </div>
          <Link to={`/beer-details/${eachBeer._id}`}>
            <img
              style={{ width: "65px", height: "150px" }}
              src={eachBeer.image_url}
              alt="beer"
            />
          </Link>
        </div>
      );
    });
  };

  render() {
    //Never set state in here
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />

          <Route
            exact
            path="/beers"
            render={props => <Beers {...props} showMeBeers={this.showBeers} />}
          />
          <Route
            exact
            path="/random"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={props => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/beer-details/:beerId"
            render={props => <BeerDetail {...props} />}
          ></Route>
        </Switch>{" "}
      </div>
    );
  }
}
export default App;
