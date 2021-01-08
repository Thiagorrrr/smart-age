import React from "react";
import PropTypes from 'prop-types';

import Input from "../Input/index"

const ListInput = props => (
    <section className={`listInput ${props.classNames || ''} `}>
        { 
            props.title && (
                <h2 className="listInput__title">{props.title}</h2>
            )
        }
        <ul className="listInput__list">
            {
                props.dataInput.map((items, index) => {
                    return (
                        <Input
                            key={index}
                            classNames={items.classNames}
                            label={items.label}
                            name={items.name}
                            placeholder={items.placeholder}
                            type={items.type}
                            required={items.required}

                        />
                    )
                })
            }
        </ul>
    </section>
)

ListInput.propTypes = {
    title: PropTypes.string,
    dataCards: PropTypes.array,
}

export default ListInput;
