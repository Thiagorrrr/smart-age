import React from "react";
import PropTypes from 'prop-types';

import Video from '../Video/index'

const Card = props => (
    <li className={`cardItem ${props.classNames || ''}`}>
        {
            props.videoSrc &&

            <a type="button" href="javascript;" role="button" className="cardItem__content-modal" data-toggle="modal" data-target={`#Modal-${props.index}`}>
                {props.videoImg &&
                    <picture className='cardItem__picture'>
                        <source media="(min-width: 1024px)" srcSet={props.imgDesk || props.videoImg} />
                        <source media="(min-width: 768px)" srcSet={props.imgTablet || props.videoImg} />
                        <source srcSet={props.videoImg} />
                        <img src={props.videoImg} className="cardItem__img" alt={props.alt} />
                    </picture>
                }
                <div className="cardItem__modal modal fade" id={`Modal-${props.index}`} tabIndex="-1" role="dialog" aria-labelledby={`#Modal-${props.index}Label`} aria-hidden="true">
                    <div className="cardItem__modal-dialog modal-dialog" role="document">
                        <div className="cardItem__modal-content modal-content">
                            <div className="cardItem__modal-body modal-body">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <Video
                                    title={props.videoTitle}
                                    src={props.videoSrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        }
        <a className="cardItem__link" href={props.link}>
            {props.img &&
                <picture className='cardItem__picture'>
                    <source media="(min-width: 1024px)" srcSet={props.imgDesk || props.img} />
                    <source media="(min-width: 768px)" srcSet={props.imgTablet || props.img} />
                    <source srcSet={props.img} />
                    <img src={props.img} className="cardItem__img" alt={props.alt} />
                </picture>
            }
            {props.title &&
                <h2 className="cardItem__title">{props.title}</h2>
            }
            {props.subtitle &&
                <h2 className="cardItem__subtitle">{props.subtitle}</h2>
            }
            {props.sku &&
                <span className="cardItem__sku">{props.sku}</span>
            }
            {props.price &&
                <span className="cardItem__price">{props.price}</span>
            }
        </a>
    </li>
)

Card.propTypes = {
    classNames: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string,
    imgTablet: PropTypes.string,
    imgDesk: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    sku: PropTypes.string,
    price: PropTypes.string,
}

export default Card;
