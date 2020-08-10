import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieGrid.scss';

class MovieGrid extends Component {
    render() {
        return (
            <div className="movie-grid">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        );
    }
}

export default MovieGrid;