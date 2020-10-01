import React, { Component } from "react";
import MovieModal from "../Forms/MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddMovieButton.scss";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

const AddMovieButton = props => {
    return (
      <div className="add-movie-button">
        <button
          type="button"
          className="ui-button transparent"
          onClick={() => props.showMovieModal(<MovieModal action={"add"} />)}
        >
          <FontAwesomeIcon icon={faPlus} />
          <span> ADD MOVIE</span>
        </button>
      </div>
    );
}

export default connect(null, { showMovieModal })(AddMovieButton);

