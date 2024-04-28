import React from 'react';
import Input from './Input';
import RadioButtons from './RadioButtons';

function FormikControl(props) {
    const{control, ...rest} = props
    switch(control){
        case 'input':
            return <Input{...rest}/>;
        case 'textarea':;
        break;
        case 'select':;
        break;
        case 'radio':;
            return <RadioButtons{...rest}/>;
        case 'checkbox':;
        break;
        case 'date':;
        break;
        default :return null
    }
}

export default FormikControl;