import React from "react";
import Card from "../../card/Card";
import './home-page-style.css';

const numberCard = {
    title: "+375 (29) 770-97-25",
    colorClass: "bg-blue-box",
};

export default function HomePage() {
    return(
        <div className="main-container">
            <div className="main-container__bg-blur"></div>
            <div className="main-container__title">
                РЕМОНТ ТОПЛИВНОЙ ДИЗЕЛЬНОЙ АППАРАТУРЫ В ВЕРХНЕДВИНСКЕ
            </div>
            <div className="main-container__number">
                <Card model={numberCard} />
            </div>
        </div>
    );
}