import React from "react";
import PropTypes from 'prop-types';


const InfoProduct = props => (
    <div className="infoProduct">
        {
            props.dataInfoProduct.map((items, index) => {
                return (
                    <div className="infoProduct__wrapper" key={index}> 
                        <div className="infoProduct__container">
                            {items?.title ? (
                                <h3 className="infoProduct__title"> {items.title}</h3>
                            ) : null
                            }
                            {
                                items?.paragraph ? (
                                    items.paragraph.map((items, index) => <p key={index} className={`infoProduct__paragraph ${items.classNames || ''}`} dangerouslySetInnerHTML={{ __html: items.info || items }}></p>)

                                ) : null
                            }
                            {
                                items.price ? (
                                    <span className="infoProduct__price">{items.price} </span>
                                ) : null
                            }
                            {
                                items.obs ? (
                                    <p className="infoProduct__obs">{items.obs} </p>
                                ) : null
                            }
                        </div>

                        {
                            items.btnLink ? (
                                <a className="infoProduct__btnLink" href={items.btnLink} > {items.btnTitle} </a>
                            ) : null
                        }
                    </div>
                )
            })
        }
    </div>

)

InfoProduct.propTypes = {
    title: PropTypes.string,

}

export default InfoProduct;
