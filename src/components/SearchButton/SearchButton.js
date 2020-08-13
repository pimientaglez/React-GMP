import React, { Component } from 'react';
import './SearchButton.scss';

class SearchButton extends Component {
    render() {
        return (
            <div className="search-button">
                <button className="ui-button primary"><span>SEARCH</span></button>
            </div>
        );
    }
}

export default SearchButton;