import React from "react";
import arrow from '../../imgs/strong/arrow-up.png'
import PropTypes from 'prop-types';


const Carousel = props => (
    <div id="Carousel">
        <div className="row">
            <div className="col-md-12">
                <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
                    <div className="carousel-inner">
                        {
                            props.DataStrong.map((items, index) => {
                                return (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''} `} key={index}>
                                        <img src={items.img} alt={items.alt} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <ol className="carousel-indicators list-inline">
                        {
                            props.DataStrong.map((items, index) => {
                                return (
                                    <li className={`list-inline-item ${index === 0 ? 'active' : ''} `} key={index}>
                                        <a href="#custCarousel" id={`carousel-selector-${index}`} className={` ${index === 0 ? 'selected' : ''} `} data-slide-to={index} data-target="#custCarousel">
                                            <img src={items.imgThumb} className="img-fluid" alt={items.alt} />
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <div className="carousel-control-container">
                            <a className="carousel-control-prev" href="#custCarousel" data-slide="prev">
                                <img className="carousel-control-prev-icon" src={arrow} alt="prev arrow logo" />
                            </a>
                            <a className="carousel-control-next" href="#custCarousel" data-slide="next">
                                <img className="carousel-control-next-icon" src={arrow} alt="next arrow logo" />
                            </a>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    </div>
)

Carousel.propTypes = {
    arrow: PropTypes.string,

}

export default Carousel;
