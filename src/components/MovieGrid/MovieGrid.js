import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import movieList from '../../utils/movieList';
import './MovieGrid.scss';

class MovieGrid extends Component {
    render() {
        return (
            <div className="movie-grid">
                {
                    movieList.map( (movie, index) =>
                        <MovieCard {...movie} key={index}/>
                    )
                }
            </div>
        );
    }
}

export default MovieGrid;