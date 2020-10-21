import React from "react";
import MovieActionsMenu from "../MovieActionsMenu/MovieActionsMenu";
import MoviePoster from '../MoviePoster/MoviePoster';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { listGenres } from '../../utils/helpers';
import "./MovieCard.scss";

const MovieCard = ({movie, onHandleMovieClick}) => {
  const [action, setAction] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const openForm = (act) => {
    setAction(act);
  }
  const openMenu = React.useCallback(
    () => {
      setOpen(!open);
    }, [open]);
  return (
      <div className="movie-card">
        <div className="movie-menu" onClick={() => openMenu()}>
          <FontAwesomeIcon icon={faEllipsisV} />
          {
            open &&
            <MovieActionsMenu movie={movie} handleClick={(act) => openForm(act)}/>
          }
        </div>
        <MoviePoster movie_poster={movie.poster_path} onClick={()=> onHandleMovieClick(movie)}/>
        <div className="info">
          <div className="title-gen">
            <div className="title">
              <h2>{movie.title}</h2>
            </div>
            <div className="genre">
              <p>{listGenres(movie.genres)}</p>
            </div>
          </div>
          <div className="year">{(new Date(movie.release_date).getFullYear())}</div>
        </div>
      </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
})
  /* title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired, */
};

export default MovieCard;
