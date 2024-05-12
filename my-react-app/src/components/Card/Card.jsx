// Card.js
import React from "react";
import { useAtom } from 'jotai';
import { cardValuesAtom } from '../PerfilJogos/Atoms';
import './Card.css';

function Card(props) {
  const [cardValues, setCardValues] = useAtom(cardValuesAtom);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  return (
    <div className="card">
      <img src={props.img} alt="" className="card-img"/>
      <input
        className="card-note"
        name={props.nome}
        placeholder={props.inicial}
        value={cardValues[props.nome]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Card;
