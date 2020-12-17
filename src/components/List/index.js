import React from "react";
import PropTypes from 'prop-types';

import Card from "../Card/index"

const List = props => (
    <section className="list">
        <ul className="list__container container">
            {
                props.dataCards.map((items, index) => {
                    return (
                        <Card
                            key={index}
                            img={items.img}
                            alt={items.alt}
                            title={items.title}
                            subtitle={items.subtitle}
                            sku={items.sku}
                            price={items.price}
                            link={items.link}
                        />
                    )
                })
            }
        </ul>
    </section>
)

List.propTypes = {
    dataCards: PropTypes.array,
}

export default List;
