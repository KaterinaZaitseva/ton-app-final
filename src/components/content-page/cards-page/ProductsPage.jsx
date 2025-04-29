import React from "react";
import Card from "../../card/Card";
import '../cards-page/cards-grid-style.css';

export default function ProductsPage(props) {
    return (
        <div className="cards-grid-container">
            <div className="products-title">Товары в наличии и под заказ</div>
            <div className="products-cards-container">
                {props.cardsList.map((card) => (
                    <Card key={card.title} model={card}></Card>                
                ))}
            </div>    
        </div>
    );
};