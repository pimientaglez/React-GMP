import movieApi from '../api/movieApi';

export const selectMovie = ( movie = null ) => {
    console.log(movie);
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};

export const fetchMovies = () => async dispatch => {
    const response = await movieApi.get('/movies');
    dispatch(
        {
            type: 'FETCH_MOVIES',
            payload: response.data.data
        }
    )
};

export const showMovieModal = (movie = null) => {
    console.log(movie);
    return {
        type: 'SHOW_MOVIE_MODAL',
        payload: movie
    };
}
