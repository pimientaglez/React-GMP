import React, { Component } from "react";

class EditMovieForm extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>EDIT MOVIE</h1>
        <form action="">
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" />

          <label htmlFor="release">RELEASE DATE</label>
          <input type="text" name="release" />

          <label htmlFor="url">MOVIE URL</label>
          <input type="text" name="url" id="url" />

          <label htmlFor="genre">GENRE</label>
          <input type="text" name="genre" id="genre" />

          <label htmlFor="overview">OVERVIEW</label>
          <input type="text" name="overview" id="overview" />

          <label htmlFor="runtime">RUNTIME</label>
          <input type="text" name="runtime" id="runtime" />

          <div className="button-group right actions">
            <button className="ui-button overline reset">RESET</button>
            <button className="ui-button primary">SUBMIT</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default EditMovieForm;
