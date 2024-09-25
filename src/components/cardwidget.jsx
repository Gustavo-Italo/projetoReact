import React from 'react';
import produtos from '../data';

const CardWidget = ({ produto }) => {
  return (
    <div className="card-widget">
      <img src={produto.imagem} alt={`Imagem Do ${produto.nome}`} className="product-image" />
      <h3>{produto.nome}</h3>
      <span className="price">R${produto.preco.toFixed(2)}</span>
      <button className="add-to-cart">Adicionar ao carrinho</button>
    </div>
  );
}

export default CardWidget;

  