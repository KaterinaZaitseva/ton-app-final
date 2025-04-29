import React from "react";
import './card-style.css';

export default function Card(props) {
    return(
        <div className="card">
            <div className={"container-card " + props.model.colorClass}>
                { props.title !== "" &&
                    <p className="card__title">{props.model.title}</p>
                }
            </div>
         </div>
    );
}