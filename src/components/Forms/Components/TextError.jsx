import React from 'react';
import { Field, ErrorMessage } from 'formik';


const TextError = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    );
}

export default TextError;