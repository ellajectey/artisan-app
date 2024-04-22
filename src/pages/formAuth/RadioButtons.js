import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextError from './TextError';

function RadioButtons(props) {

    const{label, name, options, ...rest} = props
    return (
        <div className='form-control '>
            <label className='text-white px-8 pb-6'>{label}</label><br/>
            <Field name ={name}{...rest}>
                {
                    ({ field}) => {
                       return options.map(option=>{
                        return(
                            <React.Fragment key={option.key}>
                                <input type='radio' id={option.value} {...field} value={option.value}
                                checked={field.value === option.value}
                                className='ml-8 py-8 '/>
                                <label htmlFor={option.value} className=' text-white hover:text-orange-300 py-8'>{option.key}</label>
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