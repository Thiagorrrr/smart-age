import React from "react";
import PropTypes from 'prop-types';
import BtnSee from '../BtnSee/index'

const TextLinkBtn = props => (
    <div className={`TextLinkBtn ${props.classNames ? props.classNames : ''} `}>
        {props.title &&
            <h2 className="TextLinkBtn__title">{props.title}</h2>
        }
        {props.subtitle &&
            <p className="TextLinkBtn__subtitle">{props.subtitle}</p>
        }
        {props.link &&
            <a className="TextLinkBtn__link" href={props.link}>{props.linkName} </a>
        }
        {
            props.linkBtn &&

            <BtnSee
                url={props.linkBtn}
                target="__blank"
                title={props.linkNamebtn}
            />
        }
    </div>
)

TextLinkBtn.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    linkName: PropTypes.string,
    linkBtn: PropTypes.string,
    linkNamebtn: PropTypes.string,
}

export default TextLinkBtn;
