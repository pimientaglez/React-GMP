import { combineReducers } from 'redux';

const moviesReducer = (movies = [], action) => {
    switch(action.type) {
        case 'MOVIE_FETCH_SUCCESS':
            return action.payload;
        case 'MOVIE_ADD_SUCCESS':
            return movies;
        case 'MOVIE_SEARCH_SUCCESS':
            return action.payload;
        case 'MOVIE_DELETE_SUCCESS':
            return movies.filter(movie => movie.id !== action.payload);
        case 'MOVIE_EDIT_SUCCESS':
            return movies.map(movie => 
                { 
                    if(movie.id === action.payload.id) {
                        movie = action.payload
                    }
                    return movie
                });
        case 'MOVIE_SORT_RELEASE':
            return movies.slice().sort((a,b) => new Date(b[action.payload]) - new Date(a[action.payload]));
        case 'MOVIE_SORT_RATING':
            return movies.slice().sort((a, b) => b[action.payload] - a[action.payload]);
        case 'MOVIE_FILTER_SUCCESS':
            return action.payload;
        default:
            return movies;
    }
};

const errorsReducer = (errors = null, action) => {
    switch(action.type) {
        case 'MOVIE_FETCH_FAILURE':
            return action.payload;
        case 'MOVIE_ADD_FAILURE':
            return action.payload;
        case 'MOVIE_EDIT_FAILURE':
            return action.payload;
        case 'MOVIE_FILTER_FAILURE':
            return action.payload;
        case 'MOVIE_SEARCH_FAILURE':
            return action.payload;
        default:
            return errors;
    }
}
const selectedMovieReducer = (selectedMovie = null, action) => {
    if(action.type === 'MOVIE_SELECT') {
        return action.payload;
    }
    return selectedMovie;
}
const showMovieModalReducer = (movieModal = null, action) => {
    if(action.type === 'MODAL_SHOW') {
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