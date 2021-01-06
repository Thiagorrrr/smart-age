import React from "react";
import PropTypes from 'prop-types';
import BtnSee from '../BtnSee/index'

const TextLinkBtn = props => (
    <div className={`TextLinkBtn ${props.classNames ? props.classNames : ''} `}>
        {
            props.slug && 
            <span className="TextLinkBtn__slug">{props.slug}</span> 
        }
        {props.title &&
            <h2 className="TextLinkBtn__title">{props.title}</h2>
        }
        {props.info &&
            <h3 className="TextLinkBtn__info">{props.info}</h3>
        }
        {props.subtitle &&
            <p className="TextLinkBtn__subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}></p>
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
        {
            props.list &&

            <ul className="TextLinkBtn__list">
                {
                    props.list.map((items, index) => <li key={index} className={`TextLinkBtn__list-items ${items.classNames || '' }`} dangerouslySetInnerHTML={{ __html: items.title || items }}></li>)
                }
            </ul>
        }
        {
            props.paragraph &&

            <div className="TextLinkBtn__list-paragraph">
                {
                    props.paragraph.map((items, index) => <p key={index} className={`TextLinkBtn__paragraph ${items.classNames || '' }`} dangerouslySetInnerHTML={{ __html: items.title || items }}></p>)
                }
            </div>
        }
    </div>
)

TextLinkBtn.propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    linkName: PropTypes.string,
    linkBtn: PropTypes.string,
    linkNamebtn: PropTypes.string,
}

export default TextLinkBtn;
