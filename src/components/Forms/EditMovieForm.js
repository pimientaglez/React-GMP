import React from "react";
import { connect } from "react-redux";
import { editMovie, showMovieModal } from '../../actions'

const EditMovieForm = (props) => {
    const [movieValues, setMovieValues] = React.useState(props.movie);
    const handleEdit = (e) => {
      e.preventDefault();
      props.editMovie(movieValues);
      props.showMovieModal(null);
    }
    const handleInputChange = (e) => {
      setMovieValues({...movieValues, [e.target.name]: e.target.value})
    }
    return (
      <React.Fragment>
        <h1>EDIT MOVIE</h1>
        <form action="PUT" className="form-edit" onSubmit={(e)=>handleEdit(e)}>
          <label htmlFor="title">MOVIE ID</label>
          <label>{movieValues.id}</label>
          
          <label htmlFor="title">TITLE</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={movieValues.title}
            onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="release">RELEASE DATE</label>
          <input 
            type="text" 
            name="release" 
            value={movieValues.release_date}
            onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="url">MOVIE URL</label>
          <input 
            type="text" 
            name="poster_path" 
            id="poster_path" 
            value={movieValues.poster_path}
            onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="genre">GENRE</label>
          <input 
            type="text" 
            name="genre" 
            id="genre" 
            value={movieValues.genres}
            onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="overview">OVERVIEW</label>
          <input 
            type="text" 
            name="overview" 
            id="overview" 
            value={movieValues.overview}
            onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="runtime">RUNTIME</label>
          <input 
            type="text" 
            name="runtime" 
            id="runtime" 
            value={movieValues.runtime}
            onChange={(e)=>handleInputChange(e)}/>

          <div className="button-group right actions">
            <button className="ui-button overline reset">RESET</button>
            <button className="ui-button primary">SAVE</button>
          </div>
        </form>
      </React.Fragment>
    );
  }


export default connect(null, { editMovie, showMovieModal })(EditMovieForm);
