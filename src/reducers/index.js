import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const selectedMovieReducer = (selectedMovie = null, action) => {
    if(action.type === 'MOVIE_SELECTED') {
        return action.payload;
    }
    return selectedMovie;
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
});