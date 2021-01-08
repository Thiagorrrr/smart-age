import React from "react";
import PropTypes from 'prop-types';

const Btn = props => (
    <section className='btnForm'> 
        { 
            props.title &&
            
                <button className="btnForm__link" alt={props.title} > {props.title} </button>
        }
    </section>
)

Btn.propTypes = {
    title: PropTypes.string,
}

export default Btn;
