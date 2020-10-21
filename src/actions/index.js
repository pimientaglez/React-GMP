import movieApi from '../api/movieApi';

export const selectMovie = ( movie = null ) => {
    console.log(movie);
    return {
        type: 'MOVIE_SELECT',
        payload: movie
    };
};

export const fetchMovies = () => async dispatch => {
    try{
        const response = await movieApi.get('/movies?limit=20');
        dispatch(
            {
                type: 'MOVIE_FETCH_SUCCESS',
                payload: response.data.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: 'MOVIE_FETCH_FAILURE',
                payload: 'Error Fetching movies'
            }
        )
    }
};
export const deleteMovie = (movieId = null) => async dispatch => {
    const response = await movieApi.delete(`/movies/${movieId}`);
    dispatch(
        {
            type: 'MOVIE_DELETE_SUCCESS',
            payload: movieId
        }
    )
};
export const editMovie = (movie = null) => async dispatch => {
    try {
        const response = await movieApi.put(`/movies`, movie);
        dispatch(
            {
                type: 'MOVIE_EDIT_SUCCESS',
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
                type: 'MOVIE_ADD_SUCCESS',
                payload: response.data.data
            }
            )
    }catch (error) {
        dispatch(
            {
                type: 'MOVIE_ADD_FAILURE',
                payload: error
            }
        )
    }
};

export const showMovieModal = (movie = null) => {
    return {
        type: 'MODAL_SHOW',
        payload: movie
    };
};

export const sortMovies = (sort = null) => {
    console.log('action', sort);
    switch (sort) {
        case 'release_date':
            return {
                type: 'MOVIE_SORT_RELEASE',
                payload: sort
            };
        default:
            return {
                type: 'MOVIE_SORT_RATING',
                payload: sort
            };
            
    }
}
export const filterMovies = (filter = null) => async dispatch => {
    console.log('action filter', filter);
    try{
        const response = await movieApi.get('/movies?limit=20&filter=' + filter);
        dispatch(
            {
                type: 'MOVIE_FILTER_SUCCESS',
                payload: response.data.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: 'MOVIE_FILTER_FAILURE',
                payload: error
            }
        )
    }
}
export const searchMovies = (search = null) => async dispatch => {
    console.log('action search', search);
    try{
        const response = await movieApi.get('/movies?limit=20&searchBy=title&search=' + search);
        dispatch(
            {
                type: 'MOVIE_SEARCH_SUCCESS',
                payload: response.data.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: 'MOVIE_SEARCH__FAILURE',
                payload: error
            }
        )
    }
}
