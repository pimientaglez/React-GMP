import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'


const DatePicker = (props) => {
    const { label, name, ...rest } = props
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
                    const { value } = field
                    return ( 
                        <DateView 
                            id={name} 
                            {...field} 
                            {...rest} 
                            className="calendar"
                            selected={moment(value).toDate()} 
                            onChange={(val)=>setFieldValue(name, moment(val).format('YYYY-MM-DD'))}
                        />
                    )
                }
            }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default DatePicker;