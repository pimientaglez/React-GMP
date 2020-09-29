import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMovie, showMovieModal } from '../../actions'


const DeleteMovieForm = props => {
    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteMovie(props.movie.id);
        props.showMovieModal(null);
    }
    return (
        <React.Fragment>
            <h1>DELETE MOVIE</h1>
            <form action="DELETE" className="form-delete" onSubmit={(e)=>handleDelete(e)}>
                <span>Are you sure you want to delete this movie?</span>
                <div className="button-group right actions">
                    <button className="ui-button primary" type='submit'>CONFIRM</button>
                </div>
            </form>
        </React.Fragment>
    );
}


export default connect(null, { deleteMovie, showMovieModal })(DeleteMovieForm);
