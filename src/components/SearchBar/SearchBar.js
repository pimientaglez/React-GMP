import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name="searchbar"
          placeholder="What do you want to watch?"
        />
      </div>
    );
  }
}

export default SearchBar;
