import React, { Component } from "react";
import TopContainer from "../TopContainer/TopContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <TopContainer onHandleClick={(act)=>{this.props.handleClick(act)}} />
        <SearchContainer />
        {this.props.addForm}
      </div>
    );
  }
}

export default Header;
