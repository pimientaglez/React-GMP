import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./MovieModal.scss";
import FormikContainer from './FormikContainer';
import DeleteMovieForm from "./DeleteMovieForm";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

class MovieModal extends Component {
  displayForm() {
    switch (this.props.action) {
      case "add":
        return (
          <div>
            <h1>ADD MOVIE</h1>
            <FormikContainer action="add"/>
          </div>
        )
      case "edit":
        return (
          <div>
            <h1>EDIT MOVIE</h1>
            <FormikContainer movie={this.props.movie} action="edit"/>
          </div>
          );
      case "delete":
        return <DeleteMovieForm movie={this.props.movie}/>;
      default:
        return <div>No action selected</div>;
    }
  }
  render() {
    return (
      <div className="overlay" >
        <div className="content">
          <div className="close">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => this.props.showMovieModal(null)}
            />
          </div>
          {this.displayForm()}
        </div>
      </div>
    );
  }
}

export default connect(null, { showMovieModal })(MovieModal);
