import React from "react";
import TextLinkBtn from "../TextLinkBtn/index"
import PropTypes from 'prop-types';

const ImgSide = props => (
    <section className={`ImgSide container ${props.position}`} >
        <div className="ImgSide__content-img col-lg-6">
            {props.img &&
                <picture>
                    <source media="(min-width: 1024px)" srcSet={props.imgDesk || props.img} />
                    <source media="(min-width: 768px)" srcSet={props.imgTablet || props.img} />
                    <source srcSet={props.img} />
                    <img src={props.img} className="ImgSide__img" alt={props.alt} />
                </picture>
            }
        </div>
        <TextLinkBtn
            list={props.list}
            paragraph={props.paragraph}
            classNames={props.classNames}
            title={props.title}
            subtitle={props.subtitle}
            linkNamebtn={props.linkNamebtn}
            linkBtn={props.linkBtn}
        />
    </section>
)

ImgSide.propTypes = {
    classNames: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    linkNamebtn: PropTypes.string,
    linkBtn: PropTypes.string,
    list: PropTypes.array,
    paragraph: PropTypes.array,
}

export default ImgSide;
