import React, { Component } from 'react';
import movieList from '../../utils/movieList';
import './ResultCount.scss';

class ResultCount extends Component {
    render() {
        return (
            <div className="result-count">
                <h3>{movieList.length}</h3><p>movies found</p>
            </div>
        );
    }
}

export default ResultCount;