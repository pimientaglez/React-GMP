import React, { Component } from "react";
import "./SearchContainer.scss";
import { connect } from "react-redux";

import { searchMovies } from '../../actions'

const SearchContainer = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleKeyUp = (e) => {
    e.preventDefault();
    if(e.key === 'Enter' || e.keyCode === 13) {
      if(searchTerm.length !== 0 ) {
        props.searchMovies(searchTerm);
      }  
    }
    setSearchTerm(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault();
    if(searchTerm.length === 0 ) return; 
    props.searchMovies(searchTerm);
  }

  return (
    <div className="search-container">
      <h1>FIND YOUR MOVIE</h1>
      <div className="search-bar">
        <input
          type="text"
          name="searchbar"
          placeholder="What do you want to watch?"
          onKeyUp={(e)=> handleKeyUp(e)}
        />
      </div>
      <div className="search-button">
        <button className="ui-button primary" onClick={(e)=> handleClick(e)}>
          <span>SEARCH</span>
        </button>
      </div>
    </div>
  );
}

export default connect(null, { searchMovies })(SearchContainer);
