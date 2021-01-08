import React from "react";
import PropTypes from 'prop-types';

const Search = props => (
    <section className="search">
        <div className="search__container container">
            <form className="search__form" action={props.action || ''} >
                <label className="search__label col-8 col-md-5">
                    <span className="search__icon">
                        <img src={props.icon} alt={props.alt} />
                    </span>
                    <input className="search__input" type={props.type} placeholder={props.placeholder} name={props.name} />
                </label>
                <button className="search__submit col-4 col-md-2" type={props.type}>{props.btnName}</button>
            </form>
        </div>
    </section>
)

Search.propTypes = {
    icon: PropTypes.string,
    alt: PropTypes.string,
    action: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    btnName: PropTypes.string,
}

export default Search;
