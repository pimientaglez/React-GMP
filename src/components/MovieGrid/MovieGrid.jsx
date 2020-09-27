import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieGrid.scss';
import { connect } from "react-redux";
import { selectMovie } from '../../actions'

const MovieGrid = props => {
    console.log(props.movies);
    return (
        <div className="movie-grid">
            {props.movies.length > 0 ?
                props.movies.map(movie =>
                    <MovieCard movie={movie} key={movie.id} onHandleMovieClick={(res)=>{props.selectMovie(res); window.scrollTo({top: 0, behavior: 'smooth'});}}/>
                ):
                <span>
                    Loading Movies...
                </span>    
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { selectMovie })(MovieGrid);
