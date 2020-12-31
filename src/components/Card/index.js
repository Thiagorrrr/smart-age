import React from "react";
import PropTypes from 'prop-types';

const Card = props => (
    <li className={`cardItem ${props.classNames || ''}` }>
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
