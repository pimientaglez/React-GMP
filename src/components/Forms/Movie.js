import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Movie.scss";
import AddMovieForm from "./AddMovieForm";
import EditMovieForm from "./EditMovieForm";
import DeleteMovieForm from "./DeleteMovieForm";

import { connect } from "react-redux";
import { showMovieModal } from '../../actions'

class Movie extends Component {
  displayForm() {
    switch (this.props.action) {
      case "add":
        return <AddMovieForm />;
      case "edit":
        return <EditMovieForm movie={this.props.movie}/>;
      case "delete":
        return <DeleteMovieForm movie={this.props.movie}/>;
      default:
        return <div>No action selected</div>;
    }
  }
  render() {
    return (
      <div className="overlay" onClick={()=>this.props.showMovieModal(null)}>
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

export default connect(null, { showMovieModal })(Movie);
