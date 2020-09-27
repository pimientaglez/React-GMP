import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Movie from "./Forms/Movie";
//import movieList from '../utils/movieList';
import axios from 'axios';
import "./app.scss";

import { connect } from "react-redux";
import { fetchMovies } from '../actions'

const App = (props) => {

  React.useEffect(()=>{
    props.fetchMovies()
  }, []);

  return (
    <div className="gmp">
      <ErrorBoundary>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </div>
  ); 
    
};

export default connect(null, { fetchMovies })(App);
