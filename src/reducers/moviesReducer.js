export default (movies = [], action) => {
    if(action.type === 'FETCH_MOVIES') {
        return action.payload;
    }
    return movies
};