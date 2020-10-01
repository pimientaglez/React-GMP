import React from 'react';
import {Formik, Form} from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';
import moment from 'moment';
import { connect } from "react-redux";
import { editMovie, addMovie, showMovieModal } from '../../actions';

const FormikContainer = ({movie, action, editMovie, addMovie, showMovieModal}) => {
    let initialValues = {};
    if (action === 'edit') {
        const newProps = Object.assign({}, movie);
        newProps.genres = newProps.genres.map(genre => {return {value: genre, label: genre}});
        initialValues = { ...newProps };
    } else {
        initialValues = {
            title: '',
            release_date: moment().format('YYYY-MM-DD'),
            poster_path: '',
            genres: [],
            overview: '',
            runtime: 0
        }
    }
    console.log(initialValues);
    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        release_date: Yup.string().required('Required'),
        poster_path: Yup.string().required('Required').matches(/^(ftp|http|https):\/\/[^ "]+$/, 'Enter valid URL'),
        genres: Yup.array().required('Pick at least 1 genre'),
        overview: Yup.string().required('Required'),
        runtime: Yup.number().required('Required'),
    });
    const onSubmit = values => {
        values.genres = values.genres.map(genre => genre.value);
        switch(action) {
            case 'edit':
                editMovie(values);
                showMovieModal(null);
                return;
            case 'add':
                addMovie(values);
                showMovieModal(null);
                return;
            default:
                return;
        }
    }
    
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >            
        { props => (
            <Form>
                {action === 'edit' &&
                    <div>
                        <label htmlFor="title">MOVIE ID: </label>
                        <label>{props.values.id}</label>
                    </div>
                }
                
                <FormikControl 
                    control='input' 
                    type='text' 
                    label="TITLE"
                    name="title"
                    value={props.values.title}
                />
                <FormikControl 
                    control='date' 
                    type='text' 
                    label="RELEASE DATE"
                    name="release_date"
                    value={props.values.release_date}
                />
                <FormikControl 
                    control='input' 
                    type='text' 
                    label="MOVIE URL"
                    name="poster_path"
                    value={props.values.poster_path}
                />
                <FormikControl 
                    control='select' 
                    type='select' 
                    label="GENRES"
                    name="genres"
                    value={props.values.genres}
                    onBlur={props.setFieldTouched}
                />
                <FormikControl 
                    control='input' 
                    type='text' 
                    label="OVERVIEW"
                    name="overview"
                    value={props.values.overview}
                />
                <FormikControl 
                    control='input' 
                    type='number' 
                    label="RUNTIME"
                    name="runtime"
                    value={props.values.runtime}
                />
                <div className="button-group right actions">
                    <button className="ui-button overline reset" type="reset" onClick={props.handleReset}>RESET</button>
                    <button className="ui-button primary" type='submit' disabled={!props.isValid}>SAVE</button>
                </div>
            </Form>
        )}
        </Formik>
    )
}

export default connect(null, { editMovie, addMovie, showMovieModal })(FormikContainer);
