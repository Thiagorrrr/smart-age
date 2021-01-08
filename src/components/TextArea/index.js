import React from "react";
import PropTypes from 'prop-types';

const TextArea = props => (
    <div className={`textArea ${props.classNames ? props.classNames : ''} `}>
        
        {props.title &&
            <h2 className="textArea__title">{props.title}</h2>
        }

        {props.subtitle &&
            <textarea  className="textArea__subtitle"  name="textArea" disabled placeholder={props.subtitle }/>
        }
    
    </div>
)

TextArea.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default TextArea;
