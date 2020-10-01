import React from 'react';
import Input from './Components/Input';
import DatePicker from './Components/DatePicker';
import MultiSelect from './Components/MultiSelect';

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