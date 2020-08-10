import React, { Component } from 'react';
import './SearchContainer.scss';
import SearchBar from '../SearchBar/SearchBar';
import SearchButton from '../SearchButton/SearchButton';

class SearchContainer extends Component {
    render() {
        return (
            <div className="search-container">
                <h1>FIND YOUR MOVIE</h1>
                <SearchBar />
                <SearchButton />
            </div>
        );
    }
}

export default SearchContainer;