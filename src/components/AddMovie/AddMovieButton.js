import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import './AddMovieButton.scss'

class AddMovieButton extends Component {
    render() {
        return (
            <div className="add-movie-button">
                <button type="button" className="ui-button transparent">
                    <FontAwesomeIcon icon={faPlus} />
                    <span> ADD MOVIE</span>
                </button>
            </div>
        );
    }
}

export default AddMovieButton;