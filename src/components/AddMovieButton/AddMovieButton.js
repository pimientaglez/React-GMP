import React, { Component } from "react";
import Movie from "../Forms/Movie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddMovieButton.scss";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

class AddMovieButton extends Component {
  render() {
    return (
      <div className="add-movie-button">
        <button
          type="button"
          className="ui-button transparent"
          onClick={() => this.props.showMovieModal(<Movie action={"add"} />)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span> ADD MOVIE</span>
        </button>
      </div>
    );
  }
}

export default connect(null, { showMovieModal })(AddMovieButton);

