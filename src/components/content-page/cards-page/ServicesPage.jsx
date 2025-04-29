import React from "react";
import Card from "../../card/Card";
import '../cards-page/cards-grid-style.css';

export default function ServicesPage(list) {
    return (
        <div className="cards-grid-container">
            <div className="services-cards-container">
                    {list.cardsList.map((card) => (
                        <Card key={card.title} model={card}></Card>                
                    ))}
            </div>
        </div>
    );
};