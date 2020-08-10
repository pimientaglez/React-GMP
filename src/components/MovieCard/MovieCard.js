import React, { Component } from 'react';
import './MovieCard.scss';
import Image from '../../assets/blade-runner.jpg';

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
                <img src={Image} alt=""/>
                <div className="info">
                    <div className="title-cat">
                        <div className="title"><h2>Pulp Fiction</h2></div>
                        <div className="category"><p>Action & Adventure</p></div>
                    </div>
                    <div className="year">1994</div>
                </div>
            </div>
        );
    }
}

export default MovieCard;