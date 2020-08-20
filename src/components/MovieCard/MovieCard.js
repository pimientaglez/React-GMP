import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.scss";

const MovieCard = (props) => (
  <div className="movie-card">
    <div className="movie-menu" onClick={() => props.onHandleClick(true)}>
      <FontAwesomeIcon icon={faEllipsisV} />
    </div>
    <img src={props.imgUrl} alt={props.title} />
    <div className="info">
      <div className="title-cat">
        <div className="title">
          <h2>{props.title}</h2>
        </div>
        <div className="category">
          <p>{props.category}</p>
        </div>
      </div>
      <div className="year">{props.year}</div>
    </div>
  </div>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default MovieCard;
