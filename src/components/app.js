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
  const [add, setAdd] = React.useState(false);
  //const [movieList, setMovieList] = React.useState([]);
  const [movieDetail, setMovieDetail] = React.useState(false);
  const [addForm, setAddForm] = React.useState(null);

  React.useEffect(()=>{
    /* axios.get('http://localhost:4000/movies').then((movies)=>{
      const formattedMovies = movies.data.data.map(movie => {
        movie.release_date = new Date(movie.release_date);
        return movie;
      })
      setMovieList(formattedMovies);
    }); */
    props.fetchMovies()
  }, []);

  React.useEffect(()=>{
    if (add) {
      setAddForm(<Movie onHandleClick={()=>closeForm()} action={"add"} />);
    } else {
      setAddForm(null);
    }
  }, [add]);

  const openForm = () => {
    setAdd(true);
  }
  const closeForm = () => {
    setAdd(false);
  }
  const openDetails = (movie) => {
    setMovieDetail(movie);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  const closeDetails = () => {
    setMovieDetail(null);
  }
  return (
    <div className="gmp">
      <ErrorBoundary>
        <Header 
          addForm={addForm} 
          handleClick={()=> openForm()} 
          handleMovieClick={()=> closeDetails()}/>
        <Main handleMovieClick={(movie)=> openDetails(movie)}/>
        <Footer />
      </ErrorBoundary>
    </div>
  ); 
    
};

export default connect(null, { fetchMovies })(App);
