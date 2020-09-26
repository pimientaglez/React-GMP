import movieApi from '../api/movieApi';
//Action creator
export const selectMovie = movie => {
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

