import React from 'react';
import Input from './Input';
import RadioButtons from './RadioButtons';

function FormikControl(props) {
    const{control, ...rest} = props
    switch(control){
        case 'input':
            return <Input{...rest}/>;
        case 'textarea':;
        case 'select':;
        case 'radio':;
            return <RadioButtons{...rest}/>;
        case 'checkbox':;
        case 'date':;
        default :return null
    }
}

export default FormikControl;