import React, { Component } from "react";
import Menu from "../Menu/Menu";
import "./Main.scss";
import ResultCount from "../ResultCount/ResultCount";
import MovieGrid from "../MovieGrid/MovieGrid";
import ErrorsDisplay from "../ErrorsDisplay/ErrorsDisplay";

import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <ResultCount />
        {
          <ErrorsDisplay error={this.props.errors}/>
        }
        <MovieGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    errors: state.errors
  }  
}

export default connect(mapStateToProps)(Main);

