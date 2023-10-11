import React from 'react';

import { Link } from 'react-router-dom';

// Импортирую стили
import './styles/Card.css';

// Импортирую изображения для карточек
import chair from './img/chair.png';
import lamp from './img/lamp.png';
import sofa from './img/sofa.png';
import table from './img/table.png';

// Объект для обращения к изображениям
const images: {[imgKey: string]: string} = {
    chair: chair,
    lamp: lamp,
    sofa: sofa,
    table: table
};

interface CardProps {
    imgKey: string;
    name: string;
    price: string;
}

// Функция добавления компонента Card
const Card: React.FC<CardProps> = ({imgKey, name, price}) => {
    const image = images[imgKey] || chair;
    return (
        <Link to={`/card/${imgKey}`}>
            <div className="card__frame">
                <div className="image__frame">
                    <img src={image} className="image__card" alt={imgKey} />
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
        </Link>
    );
}

export default Card;
