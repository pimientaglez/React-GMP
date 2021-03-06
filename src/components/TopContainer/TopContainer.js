import React, { Component } from "react";
import Logo from "../Logo/Logo";
import AddMovieButton from "../AddMovieButton/AddMovieButton";
import "./TopContainer.scss";

class TopContainer extends Component {
  render() {
    return (
      <div className="top-container">
        <Logo />
        <AddMovieButton />
      </div>
    );
  }
}

export default TopContainer;
