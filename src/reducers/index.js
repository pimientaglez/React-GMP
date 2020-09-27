import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';

const selectedMovieReducer = (selectedMovie = null, action) => {
    console.log(action);
    if(action.type === 'MOVIE_SELECTED') {
        return action.payload;
    }
    return selectedMovie;
}
const showMovieModalReducer = (movieModal = null, action) => {
    console.log(action);
    if(action.type === 'SHOW_MOVIE_MODAL') {
        return action.payload;
    }
    return movieModal;
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    movieModal: showMovieModalReducer
});