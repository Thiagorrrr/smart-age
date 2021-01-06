import React from "react";
import TextLinkBtn from "../TextLinkBtn/index"
import PropTypes from 'prop-types';

const Hero = props => (
  <section className="hero">
    { props.img &&

      <picture>
        <source media="(min-width: 1024px)" srcSet={props.imgDesk || props.img } />
        <source media="(min-width: 768px)" srcSet={props.imgTablet || props.img } />
        <source srcSet={props.img} />
        <img src={props.img} className="hero__img" alt={props.alt} />
      </picture>
    }
    <div className="hero__container-text container ">
      <TextLinkBtn
        slug={props.slug}
        classNames={props.classNames}
        title={props.title}
        subtitle={props.subtitle}
        link={props.link}
        linkName={props.linkName}
      />
    </div>
  </section>
)

Hero.propTypes = {
  classNames: PropTypes.string,
  img: PropTypes.string,
  imgTablet: PropTypes.string,
  imgDesk: PropTypes.string,
  alt: PropTypes.string,
  slug: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
}

export default Hero;
