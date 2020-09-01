import React from "react";
import Movie from '../Forms/Movie';
import MovieActionsMenu from "../MovieActionsMenu/MovieActionsMenu";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const [action, setAction] = React.useState(null);
  const [open, setOpen] = React.useState(null);
  const openForm = (act) => {
    setAction(act);
  }
  const openMenu = () => {
    setOpen(!open);
  }
  return (
      <div className="movie-card">
        <div className="movie-menu" onClick={() => openMenu()}>
          <FontAwesomeIcon icon={faEllipsisV} />
          {
            open &&
            <MovieActionsMenu movie={props} handleClick={(act) => openForm(act)}/>
          }
        </div>
        <img src={props.imgUrl} alt={props.title} />
        <div className="info">
          <div className="title-gen">
            <div className="title">
              <h2>{props.title}</h2>
            </div>
            <div className="genre">
              <p>{props.genre}</p>
            </div>
          </div>
          <div className="year">{props.releaseDate}</div>
        </div>
        {
          action &&
          <Movie movie={props} action={action} onHandleClick={(act) => openForm(act)}/>
        }
      </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default MovieCard;
