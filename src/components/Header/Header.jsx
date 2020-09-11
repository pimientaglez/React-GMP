import React, { Component } from "react";
import TopContainer from "../TopContainer/TopContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./Header.scss";

const Header = ({addForm, movieDetail, handleClick, handleMovieClick}) =>{

  return (
    <div className="header">
      {
      movieDetail ? 
        (<MovieDetail movie={movieDetail} onHandleClick={()=>handleMovieClick()}/>)
        :
        (<>
          <TopContainer onHandleClick={()=>{handleClick()}} />
          <SearchContainer />
        </>)
      }
      {addForm}
    </div>
  );
}

export default Header;
