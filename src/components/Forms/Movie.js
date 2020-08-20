import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Movie.scss";
import AddMovieForm from "./AddMovieForm";
import EditMovieForm from "./EditMovieForm";

class Movie extends Component {
  constructor(props) {
    super(props);
  }
  displayForm() {
    switch (this.props.action) {
      case "add":
        return <AddMovieForm />;
      case "edit":
        return <EditMovieForm />;
      default:
        return <div>No action selected</div>;
    }
  }
  render() {
    return (
      <div className="overlay">
        <div className="content">
          <div className="close">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => this.props.onHandleClick(false)}
            />
          </div>
          {this.displayForm()}
        </div>
      </div>
    );
  }
}

export default Movie;
