import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import Image from '../../assets/blade-runner.jpg';
import './MovieCard.scss';

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
                <div className="movie-menu"><FontAwesomeIcon icon={faEllipsisV} /></div>
                <img src={Image} alt=""/>
                <div className="info">
                    <div className="title-cat">
                        <div className="title"><h2>Blade Runner</h2></div>
                        <div className="category"><p>Action & Adventure</p></div>
                    </div>
                    <div className="year">2017</div>
                </div>
            </div>
        );
    }
}

export default MovieCard;