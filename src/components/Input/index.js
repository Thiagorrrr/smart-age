import React from "react";
import PropTypes from 'prop-types';

const Input = props => (
    <div className={`input ${props.classNames ? props.classNames : ''} `}>
        {
            props.label &&
            <label className="input__label">{props.label}
                {  props.required &&
                    <span className="input__info"> *</span>
                }
            </label>
        }
        <input className="input__type" type={props.type} name={props.name} placeholder={props.placeholder || ''} />
    </div>
)

Input.propTypes = {
    required: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
}

export default Input;
