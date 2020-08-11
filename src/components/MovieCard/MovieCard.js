import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import './MovieCard.scss';

const MovieCard = ({title,category,year, imgUrl}) => (
    <div className="movie-card">
        <div className="movie-menu"><FontAwesomeIcon icon={faEllipsisV} /></div>
        <img src={imgUrl} alt={title}/>
        <div className="info">
            <div className="title-cat">
                <div className="title"><h2>{title}</h2></div>
                <div className="category"><p>{category}</p></div>
            </div>
            <div className="year">{year}</div>
        </div>
    </div>
);

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired
};

export default MovieCard;