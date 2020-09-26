import React, { Component } from "react";
import Menu from "../Menu/Menu";
import "./Main.scss";
import ResultCount from "../ResultCount/ResultCount";
import MovieGrid from "../MovieGrid/MovieGrid";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <ResultCount />
        <MovieGrid onHandleMovieClick={(movie)=>this.props.handleMovieClick(movie)}/>
      </div>
    );
  }
}

export default Main;
