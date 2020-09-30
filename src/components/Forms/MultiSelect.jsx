import React from "react";
import Select from 'react-select'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const MultiSelect = (props) => {
    const genresObj = [
        { value: 'Documentary', label: 'Documentary' },
        { value: 'Comedy', label: 'Comedy' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Crime', label: 'Crime' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Adventure', label: 'Adventure' },
        { label: "Science Fiction", value: "Science Fiction" }
    ];
    const { label, name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field 
                id={name}
                name={name}
                {...rest}
            >
            {
                ({form, field}) => {
                    const { setFieldValue } = form
                    return ( 
                        <Select 
                            id={name} 
                            {...field} 
                            {...rest} 
                            isMulti
                            options={genresObj} 
                            onChange={(val)=>setFieldValue(name, val)}
                        />
                    )
                }
            }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default MultiSelect;