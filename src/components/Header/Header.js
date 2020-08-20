import React, { Component } from "react";
import TopContainer from "../TopContainer/TopContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import Movie from "../Forms/Movie";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  openForm = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div className="header">
        <TopContainer onHandleClick={this.openForm} />
        <SearchContainer />
        {this.state.open && (
          <Movie onHandleClick={this.openForm} action={"add"} />
        )}
      </div>
    );
  }
}

export default Header;
