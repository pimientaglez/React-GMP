import React from "react";
import { connect } from "react-redux";
import { editMovie, showMovieModal } from '../../actions';
import FormikContainer from './FormikContainer'

const EditMovieForm = (props) => {
    return (
        <>
            <h1>EDIT MOVIE</h1>
            <FormikContainer movie={props.movie} action='edit' />
        </>
    );
  }


export default connect(null, { editMovie, showMovieModal })(EditMovieForm);
