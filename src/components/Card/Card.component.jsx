import './Card.styles.scss';
import React from 'react';

const Card = (props) => (
  <div className="Card">
    <img src={ `https://robohash.org/${props.monster.id}?set=set2&size=180x180` } alt="monster" />
    <h2>{ props.monster.name }</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
