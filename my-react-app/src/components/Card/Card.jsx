import React from "react";
import './Card.css';

function Card(props){
    return (
            <div className="card">
                <img src={props.img} alt="" className="card-img"/>
                <input className="card-note" name={props.nome} placeholder={props.inicial} />
            </div>
    )
}

export default Card;
