import React, { Component } from "react";
import "./App.css";
import "tachyons";
import { robots } from "./components/robots";
import SearchBox from "./components/searchbox";
import CardList from "./components/cardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterRobot = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox
          searchField={this.searchField}
          onChange={this.onSearchChange}
        ></SearchBox>
        <main>
          {" "}
          <CardList object={filterRobot}></CardList>
        </main>
      </div>
    );
  }
}

export default App;
