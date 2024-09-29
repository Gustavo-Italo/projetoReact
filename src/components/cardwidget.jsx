import React, { useState } from 'react';

const CardWidget = ({ produto }) => {
  const [quantidade, setQuantidade] = useState(0);

  // aqui estou adicinando a função de estoque (caso houver)
  const incrementar = () => {
    if (produto.estoque === null || quantidade < produto.estoque) {
      setQuantidade(quantidade + 1);
    }
  };

  const decrementar = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div className="card-widget">
      <img src={produto.imagem} alt={`Imagem Do ${produto.nome}`} className="product-image"/>
      <h3>{produto.nome}</h3>
      <span className="price">R${produto.preco.toFixed(2)}</span>

      <div className="contador">
        <button onClick={decrementar}>-</button>
        <span>{quantidade}</span>
        <button onClick={incrementar}>+</button>
      </div>

      {produto.estoque !== null && quantidade >= produto.estoque && (
  <p className="estoque-limitado">
    Limite de estoque atingido! Temos apenas {produto.estoque} unidades em estoque.
  </p>
)}
    </div>
  );
};

export default CardWidget;



  