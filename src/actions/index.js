import movieApi from '../api/movieApi';

export const selectMovie = ( movie = null ) => {
    console.log(movie);
    return {
        type: 'SELECT_MOVIE',
        payload: movie
    };
};

export const fetchMovies = () => async dispatch => {
    try{
        const response = await movieApi.get('/movies?limit=100');
        dispatch(
            {
                type: 'FETCH_MOVIES',
                payload: response.data.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: 'FETCH_MOVIES_FAILURE',
                payload: 'Error Fetching movies'
            }
        )
    }
};
export const deleteMovie = (movieId = null) => async dispatch => {
    const response = await movieApi.delete(`/movies/${movieId}`);
    dispatch(
        {
            type: 'DELETE_MOVIE',
            payload: movieId
        }
    )
};
export const editMovie = (movie = null) => async dispatch => {
    try {
        const response = await movieApi.put(`/movies`, movie);
        dispatch(
            {
                type: 'EDIT_MOVIE_SUCCESS',
                payload: movie
            }
        )
    }catch (error) {
        dispatch(
            {
                type: 'EDIT_MOVIE_FAILURE',
                payload: error.messages[0]
            }
        )
    }
};

export const addMovie = (movie = null) => async dispatch => {
    try {
        const response = await movieApi.post(`/movies`, movie);
        console.log('action: ADD movie', response);
        dispatch(
            {
                type: 'ADD_MOVIE_SUCCESS',
                payload: response.data.data
            }
            )
    }catch (error) {
        dispatch(
            {
                type: 'ADD_MOVIE_FAILURE',
                payload: error
            }
        )
    }
};

export const showMovieModal = (movie = null) => {
    return {
        type: 'SHOW_MOVIE_MODAL',
        payload: movie
    };
}
