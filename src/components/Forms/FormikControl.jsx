import React from 'react';
import Input from './Input';
import DatePicker from './DatePicker';
import MultiSelect from './MultiSelect';

const FormikControl = (props) => {
    const { control, ...rest } = props

    switch(control) {
        case 'input': 
            return <Input {...rest} />;
        case 'number': return <Input {...rest} />;
        case 'select': return <MultiSelect {...rest} />;
        case 'date':
            return <DatePicker {...rest} />
        default: return null;
    }
}

export default FormikControl;