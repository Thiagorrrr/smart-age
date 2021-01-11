import React from "react";
import PropTypes from 'prop-types';

const Video = props => (
    <section className="video container"> 
    <iframe  type="text/html" title={props.title} src={`${props.src}?autoplay=0&controls=1&loop=1&modestbranding=1&mute=1&modestbranding=0&showinfo=0&iv_load_policy=3`} 
    frameBorder="0" />
    </section>
)

Video.propTypes = {
    title: PropTypes.string,
    video: PropTypes.string,
}

export default Video;
