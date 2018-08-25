import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "gray"
  };

  header = {
    justifyContent: "space-evenly",
    listStyle: "none",
    backgroundColor: "gray",
    width: "100%",
  };

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark header-css"} style={this.header}>
        <NavLink exact to="/" activeStyle={this.active}>
          Info
        </NavLink>
        <NavLink to="/scores" activeStyle={this.active}>
          Scores
        </NavLink>
      </nav>
    );
  }
}

export default Header;
