import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./SortBy.scss";

import { connect } from "react-redux";
import { sortMovies } from '../../actions'

const SortBy = (props) => {
    const handleChange = (e) => {
      props.sortMovies(e.target.value);
    }
    return (
      <div className="sort-by">
        <div className="title">SORT BY</div>
        <select name="select" onChange={(e)=> handleChange(e)} >
          
          <option value="release_date" >RELEASE DATE</option> 
          <option value="vote_average" >RATING</option>
        </select>
      </div>
    );
}

export default connect(null, { sortMovies })(SortBy);
