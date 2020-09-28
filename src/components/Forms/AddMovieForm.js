import React from "react";
import { connect } from "react-redux";
import { addMovie, showMovieModal } from '../../actions'


const AddMovieForm = (props) => {
  const [movie, setMovie] = React.useState({});
    const handleAdd = (e) => {
      e.preventDefault();
      props.addMovie(movie);
      props.showMovieModal(null);
    }
    const handleInputChange = (e) => {
      if(e.target.name === 'runtime') {
        console.log(e.target.name);
        setMovie({...movie, [e.target.name]: parseInt(e.target.value)})
      } else {
        setMovie({...movie, [e.target.name]: e.target.value})

      }
    }
    const handleInputGenre = (e) => {
      const genres = [e.target.value];
      setMovie({...movie, [e.target.name]: genres});
    }
    return (
      <React.Fragment>
        <h1>ADD MOVIE</h1>
        <form action="POST" onSubmit={(e)=> handleAdd(e)}>
          <label htmlFor="title">TITLE</label>
          <input type="text" name="title" id="title" onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="release">RELEASE DATE</label>
          <input type="text" name="release_date" onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="url">MOVIE URL</label>
          <input type="text" name="poster_path" id="poster_path" onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="genre">GENRE</label>
          <input type="text" name="genres" id="genre" onChange={(e)=>handleInputGenre(e)}/>

          <label htmlFor="overview">OVERVIEW</label>
          <input type="text" name="overview" id="overview" onChange={(e)=>handleInputChange(e)}/>

          <label htmlFor="runtime">RUNTIME</label>
          <input type="text" name="runtime" id="runtime" onChange={(e)=>handleInputChange(e)}/>

          <div className="button-group right actions">
            <button className="ui-button overline reset">RESET</button>
            <button className="ui-button primary">SUBMIT</button>
          </div>
        </form>
      </React.Fragment>
    );
}

export default connect(null, { addMovie, showMovieModal })(AddMovieForm);

