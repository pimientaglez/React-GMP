import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './MovieGrid.scss';
import { connect } from "react-redux";
import { selectMovie } from '../../actions'

class MovieGrid extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="movie-grid">
                {
                    this.props.movies.map( (movie) =>
                        <MovieCard movie={movie} key={movie.id} onHandleMovieClick={()=>{this.props.selectMovie(movie)}}/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { selectMovie })(MovieGrid);
