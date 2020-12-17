import React from "react";
import PropTypes from 'prop-types';

const TitleMark = props => (
  <section className={` titleMark ${props.classNames ? props.classNames : '' } container `}> 
    {   props.title &&    
        <h2 className="titleMark__title">{props.title}</h2>
    }
  </section>
)

TitleMark.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string
}

export default TitleMark;
