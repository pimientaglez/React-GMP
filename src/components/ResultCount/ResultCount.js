import React, { Component } from "react";
import "./ResultCount.scss";
import { connect } from "react-redux";

const ResultCount = (props) => {
    return (
      <div className="result-count">
        <h3>{props.movies.length}</h3>
        <p>movies found</p>
      </div>
    );
}

const mapStateToProps = (state) => {
  return { movies: state.movies }
}
export default connect(mapStateToProps)(ResultCount);
