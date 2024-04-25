import React from "react";
import './Card.css';

function Card(props){
    return (
            <div className="card">
                <img src={props.img} alt="" className="card-img"/>
                <div className="card-note">{props.note}</div>
            </div>
    )
}

export default Card;
