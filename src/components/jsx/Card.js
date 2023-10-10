import React from 'react';
import '../styles/Card.css';
import chair from '../img/chair.png';
import lamp from '../img/lamp.png';
import sofa from '../img/sofa.png';
import table from '../img/table.png';

const images = {
    chair: chair,
    lamp: lamp,
    sofa: sofa,
    table: table
};

function Card({key, name, price}) {
    const image = images[key] || chair;
    return (
        <div className="card__frame">
            <div className="image__frame">
                <img src={image} className="image__card" alt={key} />
                <div className="subtext__frame">
                    <p className="subtext__content">New</p>
                </div>
            </div>
            <div className="text__content__frame">
                <div className="heading__frame">
                    <p className="heading__text">{price}</p>
                </div>
                <div className="description__frame">
                    <p className="description__text">{name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
