import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';

function RadioButtons(props) {

    const{label, name, options, ... rest} = props
    return (
        <div className='form-control py-4'>
            <label className='text-white px-8 py-6'>{label}</label><br/>
            <Field name ={name}{...rest}>
                {
                    ({ field}) => {
                       return options.map(option=>{
                        return(
                            <React.Fragment key={option.key}>
                                <input type='radio' id={option.value} {...field} value={option.value}
                                checked={field.value === option.value}
                                className='ml-8 mt-4 '/>
                                <label htmlFor={option.value} className='px-4 text-white hover:text-purple-300'>{option.key}</label>
                            </React.Fragment>
                        )
                       }) 
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} className='ml-6'/>
            
        </div>
    );
}

export default RadioButtons;