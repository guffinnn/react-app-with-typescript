import React from 'react';
// Импортирую стили CSS
import './styles/ProductPage.css';

// Импортирую SVG
import arrow from './svg/arrow.svg';
import stars from './svg/start.svg';

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

// Функция добавления компонента ProductPage
const ProductPage: React.FC<CardProps> = ({imgKey, name, price}) => {
    const image = images[imgKey] || chair;
    return (
        <div className="product__global__frame">
            <div className="breadcrumbs__frame">
                <p className="link__text">Card</p>
                <img src={arrow} alt="arrow.svg." />
                <p className="link__text">{name}</p>
            </div>
            <div className="content__frame">
                <div className="product__frame">
                    <div className="column1">
                        <img src={image} className="image__product" alt="Error"></img>
                    </div>
                </div>
                <div className="column2">
                    <div className="frame1">
                        <div className="product__name">
                            <div className="heading__frame">
                                <p className="heading__product">{name}</p>
                            </div>
                            <div className="description__text">
                                <p className="description__price">{price}</p>
                            </div>
                        </div>
                        <div className="product__review">
                            <img src={stars} alt="stars.svg."/>
                            <p className="text__content">(3.5 stars) • 10 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;