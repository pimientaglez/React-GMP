import React from "react";

const MoviePoster = ({movie_poster}) => {
    const [error, setError] = React.useState(false);
    const fallback = 'http://wpmovies.scriptburn.com/wp-content/themes/wp_movies/images/noposter.jpg';
    const handleError = (e) => {
        setError(true);
    };
    const imgSrc = (!error) ? movie_poster : fallback
    return (
        <img 
            src={imgSrc} 
            onError={()=>{handleError()}}
            alt="Movie poster"/>
        
    );
}

export default MoviePoster;