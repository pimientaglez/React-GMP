import React from "react";
import { connect } from "react-redux";
import { editMovie, showMovieModal } from '../../actions';
import {Formik, Form} from 'formik';
import { useFormik } from 'formik';
import DatePickerField from "./DatePicker";


const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  } 

  if (!values.release_date) {
    errors.release_date = 'Required';
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.release_date)) {
    errors.release_date = 'Invalid date (YYYY-MM-DD)';
  }

  if (!values.poster_path) {
    errors.poster_path = 'Required';
  } else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(values.poster_path)) {
    errors.poster_path = 'Must be a valid URL';
  }
  
  if (values.genres.length === 0) {
    errors.genres = 'Required';
  } 

  if (!values.overview) {
    errors.overview = 'Required';
  } else if (values.overview.length < 25) {
    errors.overview = 'Must be at least 25 characters';
  }
  
  if (!values.runtime) {
    errors.runtime = 'Required';
  } else if (typeof values.runtime !== 'number') {
    errors.runtime = 'Must be a number';
  }

  return errors;
};

const EditMovieForm = (props) => {
    /* const formik = useFormik({
      initialValues: {
        ...props.movie
      },
      validate,
      onSubmit: values => {
        props.editMovie(values);
        props.showMovieModal(null);
      },
    }); */
    return (
        <Formik 
            initialValues={{...props.movie}}
            onSubmit={ values => {
              props.editMovie(values);
              props.showMovieModal(null);
            }}
        >            
        { formik => (
            <form action="PUT" className="form-edit" onSubmit={formik.handleSubmit}>
            <label htmlFor="title">MOVIE ID</label>
            <label>{formik.values.id}</label>
            
            <label htmlFor="title">TITLE</label>
            <input  className={formik.errors.title ? 'input-error' : '' }
              id="title" 
              type="text" 
              name="title" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? <div className="errors">{formik.errors.title}</div> : null}
            <label htmlFor="release_date">RELEASE DATE</label>
            {/* <input  className={formik.errors.release_date ? 'input-error' : '' }
              id="release_date" 
              name="release_date" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.release_date}
            /> */}
            <DatePickerField
                name="release_date"
                value={formik.values.release_date}
                onChange={formik.setFieldValue}
            />
            {formik.touched.release_date && formik.errors.release_date ? <div className="errors">{formik.errors.release_date}</div> : null}
            <label htmlFor="poster_path">MOVIE URL</label>
            <input  className={formik.errors.poster_path ? 'input-error' : '' }
              id="poster_path" 
              name="poster_path" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.poster_path}
            />
            {formik.touched.poster_path && formik.errors.poster_path ? <div className="errors">{formik.errors.poster_path}</div> : null}
            <label htmlFor="genre">GENRE</label>
            <input  className={formik.errors.genres ? 'input-error' : '' }
              id="genres" 
              name="genres" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.genres}
            />
            {formik.touched.genres && formik.errors.genres ? <div className="errors">{formik.errors.genres}</div> : null}
            <label htmlFor="overview">OVERVIEW</label>
            <input  className={formik.errors.overview ? 'input-error' : '' }
              id="overview" 
              name="overview" 
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.overview}
            />
            {formik.touched.overview && formik.errors.overview ? <div className="errors">{formik.errors.overview}</div> : null}
            <label htmlFor="runtime">RUNTIME</label>
            <input  className={formik.errors.runtime ? 'input-error' : '' }
              id="runtime" 
              name="runtime" 
              type="number" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.runtime}
            />
            {formik.touched.runtime && formik.errors.runtime ? <div className="errors">{formik.errors.runtime}</div> : null}
            <div className="button-group right actions">
              <button className="ui-button overline reset" type="reset" onClick={formik.handleReset}>RESET</button>
              <button className="ui-button primary" type='submit' disabled={!formik.isValid}>SAVE</button>
            </div>
          </form>
        )}
        </Formik>
        
    );
  }


export default connect(null, { editMovie, showMovieModal })(EditMovieForm);
