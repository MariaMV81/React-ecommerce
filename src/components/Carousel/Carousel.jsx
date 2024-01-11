// src/components/Carousel.js

import './Carousel.css';

import carousel from "../../assets/img/carousel.jpeg"

export default function Carousel()  {
    return (
        <div className="carousel-container">
            <div className="carousel">
                <img src={carousel} alt="Carousel Slide" />
            </div>
        </div>
    );
}


