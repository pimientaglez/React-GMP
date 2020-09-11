import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieGrid.scss';

class MovieGrid extends Component {
    render() {
        return (
            <div className="movie-grid">
                {
                    this.props.movieList.map( (movie) =>
                        <MovieCard movie={movie} key={movie.id} onHandleMovieClick={(movie)=>{this.props.onHandleMovieClick(movie)}}/>
                    )
                }
            </div>
        );
    }
}

export default MovieGrid;