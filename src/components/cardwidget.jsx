import React from 'react';

const CardWidget = ({ produto}) => { 
  return (
    <div className="card-widget">
      <img src={produto.imagem} alt={`Imagem Do ${produto.nome}`} className="product-image"/>
      <h3>{produto.nome}</h3>
      <span className="price">R${produto.preco.toFixed(2)}</span>
    </div>
  );
};

export default CardWidget;
