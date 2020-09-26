import React, { Component } from "react";

class EditMovieForm extends Component {
  render() {
    const { id, title, release_date, poster_path, genres, overview, runtime } = this.props.movie;

    return (
      <React.Fragment>
        <h1>EDIT MOVIE</h1>
        <form action="" className="form-edit">
          <label htmlFor="title">MOVIE ID</label>
          <label>{id}</label>
          
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" value={title}/>

          <label htmlFor="release">RELEASE DATE</label>
          <input type="text" name="release" value={release_date}/>

          <label htmlFor="url">MOVIE URL</label>
          <input type="text" name="url" id="url" value={poster_path}/>

          <label htmlFor="genre">GENRE</label>
          <input type="text" name="genre" id="genre" value={genres}/>

          <label htmlFor="overview">OVERVIEW</label>
          <input type="text" name="overview" id="overview" value={overview}/>

          <label htmlFor="runtime">RUNTIME</label>
          <input type="text" name="runtime" id="runtime" value={runtime}/>

          <div className="button-group right actions">
            <button className="ui-button overline reset">RESET</button>
            <button className="ui-button primary">SAVE</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default EditMovieForm;
