import React, { Component } from "react";
import TopContainer from "../TopContainer/TopContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./Header.scss";

import { connect } from "react-redux";


const Header = ({addForm, selectedMovie, handleClick, handleMovieClick}) =>{
  console.log(addForm);
  return (
    <div className="header">
      {
      selectedMovie ? 
        (<MovieDetail movie={selectedMovie} onHandleClick={()=>handleMovieClick()}/>)
        :
        (
          <>
            <TopContainer onHandleClick={()=>{handleClick()}} />
            <SearchContainer />
          </>
        )
      }
      {addForm}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedMovie: state.selectedMovie }
}

export default connect(mapStateToProps)(Header);
