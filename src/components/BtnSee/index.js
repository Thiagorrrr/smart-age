import React from "react";
import PropTypes from 'prop-types';

const BtnSee = props => (
    <section className={`SeeMore container ${props.classNames}`}> 
        { 
            props.url &&
                <a className="SeeMore__link" target={props.target} href={props.url}> {props.title} </a>
        }
    </section>
)

BtnSee.propTypes = {
    classNames: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
}

export default BtnSee;
