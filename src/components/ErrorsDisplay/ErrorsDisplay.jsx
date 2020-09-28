import React from 'react';
import './ErrorsDisplay.scss'

const ErrorsDisplay = ({error}) => {
    if(error) {
        const result = typeof error === 'object' ? JSON.parse(JSON.stringify(error)).message : error;
        return <div className="errors-display"><h3>{result}</h3></div>
    }
    return <div className="errors-display"><h3>{error}</h3></div>
};

export default ErrorsDisplay;