import React from 'react';
import CardWidget from './cardwidget'; 
import '../css/itemcontainer.css'

const ItemContainer = ({ produtos }) => {
  return (
    <div className="item-container">
      {produtos.map(produto => (
        <CardWidget key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default ItemContainer;

