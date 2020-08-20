import React, { Component } from "react";
import Menu from "../Menu/Menu";
import "./Main.scss";
import ResultCount from "../ResultCount/ResultCount";
import MovieGrid from "../MovieGrid/MovieGrid";
import Movie from "../Forms/Movie";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <ResultCount />
        <MovieGrid />
      </div>
    );
  }
}

export default Main;
