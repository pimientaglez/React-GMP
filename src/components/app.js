import React from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
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
