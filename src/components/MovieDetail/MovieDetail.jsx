import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from '../Logo/Logo';
import './MovieDetail.scss';

const MovieDetail = ({movie, onHandleClick}) => {
    return (
        <div className="movie-detail">
            <div className="top">
                <Logo/>
                <div className="back" onClick={()=>onHandleClick()}><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            <div className="movie">
                <div className="image-container"><img src={movie.poster_path} alt={movie.title} /></div>
                <div className="info-container">
                    <div className="title-container">
                        <h1 className="title">{movie.title}</h1>
                        <div className="rate-container">
                            <h1 className="rate">{movie.vote_average}</h1>
                        </div>
                    </div>
                    <div className="sub-title">
                        <p>Oscar winning Movie</p>
                    </div>
                    <div className="year-duration">
                        <h2 className="year">{movie.release_date.getFullYear()}</h2>
                        <h2 className="duration">{movie.runtime} min</h2>
                    </div>
                    <div className="overview">{movie.overview}</div>
                </div>
            </div>
        </div>
    );
};


export default MovieDetail;