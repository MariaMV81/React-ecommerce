// src/components/CardSection.js

import './Card.css';

export default function Card() {
    return (
        <section className="card-section">
            <h1>Mis Proyectos</h1>
            <div className="cards-container">
            <div className="card">
                <img src="/path/to/card-image1.jpg" alt="Card 1" />
                <h2>Proyecto 1</h2>
                <p>Ecommerce</p>
                <div className="rating">
                    
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <button className="vote-button">Votar</button>
            </div>

            <div className="card">
                <img src="/path/to/card-image2.jpg" alt="Card 2" />
                <h2>Proyecto 2</h2>
                <p>Poke API</p>
                <div className="rating">
                    
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <button className="vote-button">Votar</button>
            </div>

            <div className="card">
                <img src="/path/to/card-image3.jpg" alt="Card 3" />
                <h2>Proyecto 3</h2>
                <p>Calculadora</p>
                <div className="rating">
                    
                    <span>⭐⭐⭐⭐⭐</span>
                </div>
                <button className="vote-button">Votar</button>
            </div>
            </div>
        </section>
    );
}
