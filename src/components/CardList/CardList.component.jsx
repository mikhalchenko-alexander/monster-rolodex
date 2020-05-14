import React from 'react';
import './CardList.styles.scss';
import Card from '../Card/Card.component';

const CardList = (props) => (
  <div className="CardList">
    {
      props.monsters.map(monster => <Card key={ monster.id } monster={ monster } />)
    }
  </div>
);

export default CardList;
