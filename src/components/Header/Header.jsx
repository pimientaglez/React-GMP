import React from "react";
import TopContainer from "../TopContainer/TopContainer";
import SearchContainer from "../SearchContainer/SearchContainer";
import MovieDetail from "../MovieDetail/MovieDetail";
import "./Header.scss";

import { connect } from "react-redux";



const Header = ({ selectedMovie, movieModal }) => {
  return (
    <div className="header">
      {
      selectedMovie ? 
        (<MovieDetail movie={selectedMovie} />)
        :
        (
          <>
            <TopContainer />
            <SearchContainer />
          </>
        )
      }
      {movieModal}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { 
    selectedMovie: state.selectedMovie,
    movieModal: state.movieModal
  }  
}

export default connect(mapStateToProps)(Header);
