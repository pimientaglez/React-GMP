import React from "react";
import Movie from '../Forms/Movie';
import MovieActionsMenu from "../MovieActionsMenu/MovieActionsMenu";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
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
        <img src={movie.poster_path} alt={movie.title} onClick={()=> onHandleMovieClick(movie)}/>
        <div className="info">
          <div className="title-gen">
            <div className="title">
              <h2>{movie.title}</h2>
            </div>
            <div className="genre">
              <p>{movie.genres[0]}</p>
            </div>
          </div>
          <div className="year">{movie.release_date.getFullYear()}</div>
        </div>
        {
          action &&
          <Movie movie={movie} action={action} onHandleClick={(act) => openForm(act)}/>
        }
      </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default MovieCard;
