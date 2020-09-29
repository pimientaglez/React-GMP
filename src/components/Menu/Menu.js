import React, { Component } from "react";
import "./Menu.scss";
import Genres from "../Genres/Genres";
import SortBy from "../SortBy/SortBy";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Genres />
        <SortBy />
      </div>
    );
  }
}

export default Menu;
