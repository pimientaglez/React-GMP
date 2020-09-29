import { combineReducers } from 'redux';

const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_SUCCESS':
            return action.payload;
        case 'ADD_MOVIE_SUCCESS':
            return movies;
        case 'DELETE_MOVIE_SUCCESS':
            return movies.filter(movie => movie.id !== action.payload);
        case 'EDIT_MOVIE_SUCCESS':
            return movies.map(movie => 
                { 
                    if(movie.id === action.payload.id) {
                        movie = action.payload
                    }
                    return movie
                });
        case 'SORT_MOVIES_RELEASE':
            return movies.slice().sort((a,b) => new Date(b[action.payload]) - new Date(a[action.payload]));
        case 'SORT_MOVIES_RATING':
            return movies.slice().sort((a, b) => b[action.payload] - a[action.payload]);
        case 'FILTER_MOVIES_SUCCESS':
            return action.payload;
        default:
            return movies;
    }
};

const errorsReducer = (errors = null, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES_FAILURE':
            return action.payload;
        case 'ADD_MOVIE_FAILURE':
            return action.payload;
        case 'EDIT_MOVIE_FAILURE':
            return action.payload;
        case 'FILTER_MOVIE_FAILURE':
            return action.payload;
        default:
            return errors;
    }
}
const selectedMovieReducer = (selectedMovie = null, action) => {
    if(action.type === 'SELECT_MOVIE') {
        return action.payload;
    }
    return selectedMovie;
}
const showMovieModalReducer = (movieModal = null, action) => {
    if(action.type === 'SHOW_MOVIE_MODAL') {
        return action.payload;
    }
    return movieModal;
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    movieModal: showMovieModalReducer,
    errors: errorsReducer
});