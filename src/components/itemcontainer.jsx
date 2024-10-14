import React from 'react';
import CardWidget from './cardwidget'; 
import '../css/itemcontainer.css'
import { Link } from 'react-router-dom';


const ItemContainer = ({ produtos }) => {
  return (
    <div className="item-container">
      {produtos.map(produto => (
         <Link to={`/item/${produto.id}`} key={produto.id}>
        <CardWidget key={produto.id} produto={produto} />
         </Link>
      ))}
    </div>
  );
}

export default ItemContainer;

